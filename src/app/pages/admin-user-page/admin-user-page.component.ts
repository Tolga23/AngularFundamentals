import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, of, take } from 'rxjs';
import { UserService } from 'src/app/services/user.service';


// DTO'dan gelen verileri tutmak için interface oluşturuyoruz.
export interface User {
  id: number;
  name?: string;
  surname?: string;
  username: string;
  email?: string;
}

@Component({
  templateUrl: './admin-user-page.component.html',
  styleUrls: ['./admin-user-page.component.scss']
})
export class AdminUserPageComponent implements OnInit {
  users: User[] = [
    {
      id: 1,
      name: "Tolga",
      surname: "Hardal",
      username: "tolgahardal",
    },
    {
      id: 2,
      name: "Lethal",
      surname: "Bizzle",
      username: "lethalbizzle",
    },
    {
      id: 3,
      name: "Tinchy",
      surname: "Stryder",
      username: "tinchystryder",
    }
  ];

  constructor(
    private httpClient: HttpClient,
    private userService: UserService) { }

  async ngOnInit() {
    // this.users.map((user) => {
    //   user.name = user.name?.toUpperCase();
    //   user.surname = user.surname?.toUpperCase();
    //   user.email = user.username + "@gmail.com";
    // }
    // );

    //this.promiseSample();
    // this.fetchSample();
    // this.asyncAwaitfetchUsers();
    //this.loadDataWithHttpClient();
    this.userService.getUsers().subscribe({
      next: (data: User[]) => {
        this.users = data;
        console.log(data);
    }
    });

  }



  loadDataWithHttpClient() {
    const obb: Observable<number[]> = of([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    obb.subscribe({
      next: (data) => {
        console.log(data);
      },
    });

    const obb2 = new Observable((observer) => {
     // observer.error('error'); // reject
      observer.next([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // resolve
    });

    // pipe ile veriler man
    obb2.pipe(take(1), map((data:any) => {
      return data.map((item:any) => {
        return item * 2;
      });
    })).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('complete');
      }
    });

    var subs = obb2.subscribe({ next: () => { }, error(err) {}, complete() {} });
    subs.unsubscribe(); // kaynak tüketimini önlemek için kullanılır.

    // Observable ile Promise farkı
    // Promise tanımlandığında kaynak tüketmeye başlar. Observable tanımlandığında çalışmaya başlamaz. Subscribe ile çalıştırılır.
    // İş bitince Promise kaynak tüketimini sonlandırır. Observable ise unsubscribe ile kaynak tüketimini sonlandırır.
    // Observable'da veri takibi yapılabilir. Amaç veri değiştiğinde anlık olarak veriyi yakalamak. 

    this.httpClient.get('https://jsonplaceholder.typicode.com/users', {
      headers: {
        Authorization: 'Bearer token',
        ContentType: 'application/json',
    },
    })
    .pipe(take(1)) // take() ile unsubscribe işlemi yapılır. 
    .subscribe({
      next:(response:any) => {
      console.log(response);
      this.users = response;
      },
      error:(error) => {
        console.log(error);
      },
      complete:() => {
        console.log('complete');
      }
    });

  }

  private fetchSample() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response: Response) => {
        console.log(response);

        if (response.status === 401) {
          return Promise.reject({ message: 'You need to login' });
        }

        if (!response.ok) {
          return Promise.reject({ message: 'Page cant find' }); // response içerisindeki hata mesajını yakalayıp reject eder.        
        }

        return response.json(); // response içerisindeki verileri json formatına çevirir.
      }).then((data: any) => {
        console.log(data); // json formatına çevrilen veriler
        this.users = data; // data olarak api'den gelen verileri users değişkenine atıyoruz.
      }).catch((error) => {
        console.log('Error: ', error.message);
      });
  }

  async asyncAwaitfetchUsers() {
    // ES7 async await ile promise yapısının kullanımı
    try {
      // bu sayede Promise chain yapısında olduğu gibi then ve catch kullanmamıza gerek kalmaz.
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      console.log(data);

      const postResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
      const postData = await postResponse.json();
      console.log(postData);

      if(postData.status == 404) {
        Promise.reject({ message: 'Page cant find' });
      }

    } catch (error) {
      console.log('Error: ', error);
    } finally {
      console.log('Finally');
    }
  }


  promiseSample() {
    // promise verinin t zamanda geldiği durumlar için kullanılılan async yapıdır.
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([{ id: 1, name: 'Tolga' }]); // sonuç başarılı ise resolve ile döndürülür.
      }, 1000);
    });

    // promise çağrılma kısmı
    promise.then((data: any) => {
      console.log(data); // resolve içerisindeki değer
    }).catch((error) => {
      console.log(error); // verilerin reject edilmesi durumunda
    }).finally(() => {
      console.log('Finally');
    });

    let counter = 0;

    const timer = new Promise((resolve, reject) => {
      setTimeout(() => {
        counter++;
        resolve("Counter " + counter);
      }, 1000);
    }
    );

    timer.then((data: any) => {
      console.log(data);
    });

    const promiseWrapper = new Promise((resolve, reject) => {

      const response: any = [];

      // promise chain yapısı ile işlemlerin sıralı olarak çağrılması sağlanır.
      promise.then((data: any) => {
        console.log('promise data', data);
        response.push(data);
        return timer;
      }).then((timerData: any) => {
        console.log('timerData ', timerData);
        response.push(timerData);
        resolve(response);
      }).then(() => {
        console.log('response', response);
      });

    });

    promiseWrapper.then((data: any) => {
      console.log('promiseWrapper', data);
    });

    // Promise all ile birden fazla promise aynı anda tek seferde çağrılabilir. Sonuçlar bir dizi içerisinde döndürülür.
    // Promise chain ile benzer mantıkta çalışır.
    Promise.all([promise, timer]).then((response) => {
      console.log(response);
    });
  }

}
