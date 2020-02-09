import Vue from 'vue'
import { Tabbar, TabbarItem } from 'vant';
import { Loading } from 'vant';
import { Image } from 'vant';
import { Toast } from 'vant';
import { Dialog } from 'vant';
import { NavBar } from 'vant';
import { AddressList } from 'vant';
import { ContactCard, ContactList, ContactEdit } from 'vant';
import { AddressEdit } from 'vant';
Vue.use(Tabbar)
    .use(TabbarItem)
    .use(Loading)
    .use(Image)
    .use(Toast)
    .use(Dialog)
    .use(NavBar)
    .use(ContactCard)
    .use(ContactList)
    .use(ContactEdit)
    .use(AddressEdit)
    .use(AddressList);