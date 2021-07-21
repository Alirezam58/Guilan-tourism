import React from 'react'
import './Cards.css'
import CardItem from './CardItem'

function Cards() {
    return (
        <div className='cards'>
            <h1>مناظر دیدنی گیلان را بررسی کنید</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                        src='./images/img-3.jpg'
                        text="لاهیجان عروس شهرهای گیلان را مورد بررسی قرار دهید"
                        label='مناظر'
                        path='/services'/>
                        <CardItem 
                        src='./images/img-4.jpg'
                        text="شهر باران های نقره ای در شب تاریک چون ماه می درخشد"
                        label='مناظر'
                        path='/services'/>
                    </ul>
                    <ul className='cards__items'>
                        <CardItem 
                        src='./images/img-5.jpg'
                        text="فومن شهر کلوچه و صنایع دستی گیلان پذیرای شما مسافران"
                        label='مناظر'
                        path='/services'/>
                        <CardItem 
                        src='./images/img-6.jpg'
                        text="قلعه رودخان دژ مستحکم هزار ساله،نگهبان مرز گیلان زمین"
                        label='مناظر'
                        path='/services'/>
                        <CardItem 
                        src='./images/img-7.jpg'
                        text="دریای خزر پیوند دهنده فرهنگ ها و اقلیم های گوناگون"
                        label='مناظر'
                        path='/services'/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
