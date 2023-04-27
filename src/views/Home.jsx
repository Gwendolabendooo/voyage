import React, { useState } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';

import BgHome from '../assets/bg/bgHome.png'

import Icon from '@mdi/react';
import { mdiAccountMultiple, mdiCalendar, mdiRoadVariant } from '@mdi/js';

import DatePicker from '../components/DatePicker'

import 'swiper/css';
import "swiper/css/pagination";

export default function Home() {
    const [activeType, setActiveType] = useState("Evasion");
    const [value, setValue] = useState(null);
    const [calendarDate, setCalendarDate] = useState(null);
    const [adultes, setAdultes] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);
    const [enfants, setEnfants] = useState(0);

    const lastTravel = [
        {
            picture: "https://www.guidesulysse.com/images/destinations/iStock-1137803766.jpg",
            name: "Expédition à barcelone"
        },
        {
            picture: "https://www.guidesulysse.com/images/destinations/iStock-1137803766.jpg",
            name: "Expédition à barcelone"
        },
        {
            picture: "https://www.guidesulysse.com/images/destinations/iStock-1137803766.jpg",
            name: "Expédition à barcelone"
        },
        {
            picture: "https://www.guidesulysse.com/images/destinations/iStock-1137803766.jpg",
            name: "Expédition à barcelone"
        },
        {
            picture: "https://www.guidesulysse.com/images/destinations/iStock-1137803766.jpg",
            name: "Expédition à barcelone"
        },
        {
            picture: "https://www.guidesulysse.com/images/destinations/iStock-1137803766.jpg",
            name: "Expédition à barcelone"
        },
        {
            picture: "https://www.guidesulysse.com/images/destinations/iStock-1137803766.jpg",
            name: "Expédition à barcelone"
        },
        {
            picture: "https://www.guidesulysse.com/images/destinations/iStock-1137803766.jpg",
            name: "Expédition à barcelone"
        },
        {
            picture: "https://www.guidesulysse.com/images/destinations/iStock-1137803766.jpg",
            name: "Expédition à barcelone"
        }
    ]

    const blogContent = [
        {
            picture: "https://img.freepik.com/vecteurs-libre/illustration-publication-blog-plat-organique-personnes_23-2148955260.jpg",
            name: "Les plus belles randos de la Croatie.",
            priority: 1
        },
        {
            priority: 2,
            content: [
                {
                    picture: "https://img.freepik.com/vecteurs-libre/illustration-publication-blog-plat-organique-personnes_23-2148955260.jpg",
                    name: "Expédition à barcelone",
                },
                {
                    picture: "https://img.freepik.com/vecteurs-libre/illustration-publication-blog-plat-organique-personnes_23-2148955260.jpg",
                    name: "Expédition à barcelone",
                }
            ]
        },
        {
            picture: "https://img.freepik.com/vecteurs-libre/illustration-publication-blog-plat-organique-personnes_23-2148955260.jpg",
            name: "Les plus belles randos de la Croatie.",
            priority: 1
        },
        {
            priority: 2,
            content: [
                {
                    picture: "https://img.freepik.com/vecteurs-libre/illustration-publication-blog-plat-organique-personnes_23-2148955260.jpg",
                    name: "Expédition à barcelone",
                },
                {
                    picture: "https://img.freepik.com/vecteurs-libre/illustration-publication-blog-plat-organique-personnes_23-2148955260.jpg",
                    name: "Expédition à barcelone",
                }
            ]
        },
        {
            picture: "https://img.freepik.com/vecteurs-libre/illustration-publication-blog-plat-organique-personnes_23-2148955260.jpg",
            name: "Les plus belles randos de la Croatie.",
            priority: 1
        },
        {
            priority: 2,
            content: [
                {
                    picture: "https://img.freepik.com/vecteurs-libre/illustration-publication-blog-plat-organique-personnes_23-2148955260.jpg",
                    name: "Expédition à barcelone",
                },
                {
                    picture: "https://img.freepik.com/vecteurs-libre/illustration-publication-blog-plat-organique-personnes_23-2148955260.jpg",
                    name: "Expédition à barcelone",
                }
            ]
        }
    ]

    const steps = [
        {
            step: "Etape 1",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            picture: "https://media.routard.com/image/40/2/panneaux-voyage.1603402.jpg"
        },
        {
            step: "Etape 2",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            picture: "https://st.depositphotos.com/2294011/3530/i/600/depositphotos_35302039-stock-photo-travel-and-trip.jpg"
        },
        {
            step: "Etape 3",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            picture: "https://st.depositphotos.com/1003723/3316/i/600/depositphotos_33167371-stock-photo-girl-on-the-wooden-jetty.jpg"
        }
    ]

    return (
        <>
            <header className='headerHome' style={{ backgroundImage: 'url(' + BgHome + ')', height: '80vh' }}>
                <div>
                    <div className='primary titleHeader'>
                        Get ready
                    </div>
                    <div className='descHeader'>
                        Découvrez Travel l'IA qui planifie vos vacances
                    </div>
                </div>
                <div className='module'>
                    <div className='type'>
                        <div className='typeButton' style={{ backgroundColor: activeType === "Evasion" ? "#1B3936" : "#EAEAEA", color: activeType === "Evasion" ? "white" : "#565656" }} onClick={() => setActiveType("Evasion")}>
                            Evasion
                        </div>
                        <div className='typeButton' style={{ backgroundColor: activeType !== "Evasion" ? "#1B3936" : "#EAEAEA", color: activeType !== "Evasion" ? "white" : "#565656" }} onClick={() => setActiveType("Sejour")}>
                            Séjour
                        </div>
                    </div>
                    <div className='descType'>
                        {activeType === "Evasion" ?
                            <>
                                <div>
                                    <div className='typeButton' style={{ backgroundColor: activeType === "Evasion" ? "#1B3936" : "#EAEAEA", color: activeType === "Evasion" ? "white" : "#565656" }} onClick={() => setActiveType("Evasion")}>
                                        <Icon path={mdiRoadVariant}
                                            size={1}
                                            horizontal
                                            vertical
                                            color="#565656" />
                                        Road-Trip
                                    </div>
                                </div>
                                <div>
                                    <div className='typeButton' style={{ backgroundColor: activeType === "Evasion" ? "#1B3936" : "#EAEAEA", color: activeType === "Evasion" ? "white" : "#565656" }} onClick={() => setActiveType("Evasion")}>
                                        <Icon path={mdiRoadVariant}
                                            size={1}
                                            horizontal
                                            vertical
                                            color="#565656" />
                                        Sac à dos
                                    </div>
                                </div>
                            </> :
                            <>
                                <div className='typeButton' style={{ backgroundColor: activeType === "Evasion" ? "#1B3936" : "#EAEAEA", color: activeType === "Evasion" ? "white" : "#565656" }} onClick={() => setActiveType("Evasion")}>
                                    Evasion
                                </div>
                                <div className='typeButton' style={{ backgroundColor: activeType !== "Evasion" ? "#1B3936" : "#EAEAEA", color: activeType !== "Evasion" ? "white" : "#565656" }} onClick={() => setActiveType("Sejour")}>
                                    Séjour
                                </div>
                            </>
                        }
                    </div>
                    <GooglePlacesAutocomplete
                        apiKey="AIzaSyBIfq5o0rdL8PRihvRJSB3GDgZ-Z5ubeMk"
                        selectProps={{
                            placeholder: 'Votre destination',
                        }}
                    />
                    <DatePicker />
                    <div className='peopleC'>
                        <div>
                            Adulte(s)
                            <div className='position-relative'>
                                <Icon path={mdiAccountMultiple}
                                    size={1}
                                    className="iconabs"
                                    color="#565656" />
                                <input type="number" name="adultes" value={adultes} onChange={(e) => setAdultes(e.target.value)} min={0} max={10} id="" />
                            </div>
                        </div>
                        <div>
                            Enfant(s)
                            <div className='position-relative'>
                                <Icon path={mdiAccountMultiple}
                                    size={1}
                                    className="iconabs"
                                    color="#565656" />
                                <input type="number" name="enfant" value={enfants} onChange={(e) => setEnfants(e.target.value)} min={0} max={10} id="" />
                            </div>
                        </div>
                    </div>
                    <button className='primary-button'>
                        Aller plus loin
                    </button>
                </div>
            </header>

            <div className='title' style={{ paddingLeft: '80px', paddingTop: "80px" }}>
                Voyages récents
            </div>

            <Swiper
                spaceBetween={50}
                slidesPerView={"auto"}
                loop={true}
                grabCursor={true}
                pagination={true}
                style={{ padding: '80px' }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                modules={[Pagination, Autoplay]}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {lastTravel.map((el, i) => {
                    return (
                        <SwiperSlide key={i} style={{ width: '350px' }}>
                            <div className='slideLast' style={{ backgroundImage: "url(" + el.picture + ")" }}>
                                <div className='ctnSlide'>
                                    <div className='ctnName'>
                                        {el.name}
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )

                })}
            </Swiper>
            <div className='title' style={{ paddingLeft: '80px', paddingTop: "80px" }}>
                Nos articles
            </div>
            <Swiper
                spaceBetween={50}
                slidesPerView={"auto"}
                loop={true}
                grabCursor={true}
                pagination={true}
                style={{ padding: '50px' }}
                modules={[Pagination]}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {blogContent.map((el, i) => {
                    if (el.priority === 1) {
                        return (
                            <SwiperSlide key={i} style={{ width: '700px' }}>
                                <div className='slideLastBlog' style={{ backgroundImage: "url(" + el.picture + ")", height: '500px' }}>
                                    <div className='ctnSlide'>
                                        <div className='ctnName'>
                                            {el.name}
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    } else {
                        return (<SwiperSlide key={i} style={{ width: '500px', height: '500px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <div className='slideLastBlog' style={{ backgroundImage: "url(" + el.content[0].picture + ")", height: '220px' }}>
                                <div className='ctnSlide'>
                                    <div className='ctnName'>
                                        {el.content[0].name}
                                    </div>
                                </div>
                            </div>
                            <div className='slideLastBlog' style={{ backgroundImage: "url(" + el.content[1].picture + ")", height: '220px' }}>
                                <div className='ctnSlide'>
                                    <div className='ctnName'>
                                        {el.content[1].name}
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>)
                    }

                })}
            </Swiper>

            <div style={{width: '75%', marginTop: "250px", position: 'relative', marginBottom: '100px'}}>
                <div class="picStep" style={{backgroundImage: 'url('+steps[activeIndex].picture+')', height: '100%', position: 'absolute'}}>

                </div>
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    grabCursor={true}
                    pagination={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                      }}
                    modules={[Pagination, Autoplay]}
                    onSlideChange={(e) => {setActiveIndex(e.activeIndex); console.log("test", e.activeIndex)}}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {steps.map((el, i) => {
                        return (
                            <SwiperSlide key={i} style={{ width: '700px' }}>
                                <div className='slideLastStep'>
                                    <div className='step' style={{position: 'absolute'}}>
                                        0{i+1}
                                    </div>
                                    <div className='ctnSlideStep' style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                        <div style={{width: '50%', color: 'white'}}>
                                        <div className='title'>
                                                {el.step}
                                            </div>
                                            <div>
                                                {el.desc}
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )

                    })}
                </Swiper>
            </div>
        </>
    )
}
