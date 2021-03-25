import {request} from './request.js'

export function getDetail(iid){
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

export function getRecommends(){
  return request({
    url: '/recommend'
  })
}

// 对于后台数据比较杂乱的时候， 可以创建一个类来整理数据 到时候直接使用对象数据
export class Goods{
  constructor(itemInfo,columns,services){
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.oldPrice = itemInfo.oldPrice
    this.newPrice = itemInfo.price
    this.discount = itemInfo.discountDesc
    this.realPrice = itemInfo.lowNowPrice
    this.columns = columns
    this.services = services
  }

}

export class Shop{
  constructor(shopInfo){
    this.logo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.fans = shopInfo.cFans
    this.sells = shopInfo.cSells
    this.goods = shopInfo.cGoods
    this.score = shopInfo.score
  }
}

export class GoodsParams {
	constructor(info,rule){
		this.image = info.images? info.images[0] : ''
		this.info = info
		this.rule = rule
	}
}
