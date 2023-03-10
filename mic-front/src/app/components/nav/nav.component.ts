import { Component } from '@angular/core'
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { Observable } from 'rxjs'
import { map, shareReplay } from 'rxjs/operators'
import { Router } from '@angular/router'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  menus = [
    {
      label: 'Associados',
      icon: 'groups',
      name: 'associates',
      subMenus: [
        {
          label: 'Associados',
          routerLink: 'associates',
        },
      ],
    },
    {
      label: 'Prestadores',
      icon: 'medical_services',
      name: 'providers',
      subMenus: [
        {
          label: 'Prestadores',
          routerLink: 'providers',
        },
      ],
    },
    {
      label: 'Conta',
      icon: 'account_circle',
      name: 'all',
      subMenus: [
        {
          label: 'Sair',
          routerLink: 'login',
        },
      ],
    },
  ]

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    )

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  getMenus() {
    const names = JSON.parse(sessionStorage.getItem('menus') ?? '[]')
    return this.menus.filter(menu => names.includes(menu.name));
  }

  isLoginPage(): boolean {
    return this.router.routerState.snapshot.url === '/login';
  }

}
