import React, { useState } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';

import BgHome from '../assets/bg/bgHome.png'

import Icon from '@mdi/react';
import { mdiAccountMultiple, mdiBagPersonalOffOutline, mdiBagPersonalOutline, mdiCalendar, mdiCalendarBlank, mdiCalendarWeekendOutline, mdiClose, mdiRoadVariant } from '@mdi/js';

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
    const [Step2, setStep2] = useState(false);
    const [destination, setDestination] = useState('');
    const [valStep2, setValStep2] = useState({});

    const lastTravel = [
        {
            picture: "https://www.guidesulysse.com/images/destinations/iStock-1137803766.jpg",
            name: "Expédition à barcelone"
        },
        {
            picture: "https://resize-elle.ladmedia.fr/rcrop/638,,forcex/img/var/plain_site/storage/images/loisirs/evasion/les-plus-belles-villes-du-monde/61750486-1-fre-FR/Les-25-plus-belles-villes-du-monde-qui-nous-font-rever.jpg",
            name: "Expédition à barcelone"
        },
        {
            picture: "https://www.ou-et-quand.net/blog/wp-content/uploads/2020/05/eiffel-tower-3349075_1280.jpg",
            name: "Expédition à barcelone"
        },
        {
            picture: "data:image/jpeg;base64,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",
            name: "Expédition à barcelone"
        },
        {
            picture: "https://voyage-onirique.com/wp-content/uploads/2021/09/canada-plus-belle-ville.jpg",
            name: "Expédition à barcelone"
        },
        {
            picture: "https://www.instinct-voyageur.fr/wp-content/uploads/2022/06/strasbourg-g1f8f5ff29-640.jpg",
            name: "Expédition à barcelone"
        },
        {
            picture: "https://uploads.exoticca.fr/fr_FR/destination/poi/kyoto.png",
            name: "Expédition à barcelone"
        },
        {
            picture: "https://vudaf.com/wp-content/uploads/2019/05/Duba%C3%AF-touche-le-ciel.jpg",
            name: "Expédition à barcelone"
        },
        {
            picture: "https://www.voyageur-independant.com/wp-content/uploads/la-havana-cuba-1024x681.jpg",
            name: "Expédition à barcelone"
        }
    ]

    const blogContent = [
        {
            picture: "https://www.lonelyplanet.fr/sites/lonelyplanet/files/styles/article_main_image/public/media/article/image/fotolia_99200222_subscription_monthly_m_0_0.jpg?itok=4VbN41O6",
            name: "Les plus belles randos de la Croatie.",
            priority: 1
        },
        {
            priority: 2,
            content: [
                {
                    picture: "https://orcada-voyages.com/wp-content/uploads/2022/05/CAMPING-CAR-HOME-2020-800x500-1.jpg",
                    name: "Expédition à barcelone",
                },
                {
                    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_QZ8GfM2XJfblu_nFf8WS8jQARfvrDfue9lqF7Xl6LwDffQIJH41W_dnh7MD1_dL9WZQ&usqp=CAU",
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

    function step2() {
        setStep2(true)
    }

    return (
        <>
            <header className='headerHome' style={{ backgroundImage: 'url(' + BgHome + ')'}}>
                <div>
                    <div className='primary titleHeader'>
                        Get ready
                    </div>
                    <div className='descHeader'>
                        Découvrez Travel l'IA qui planifie vos vacances
                    </div>
                </div>
                <div className='module'>
                    {
                        Step2 &&                     <div className='module-2'>
                        <div className='title-module-2'>
                            Road-Trip
                        </div>
                        <div className='close-modal' onClick={() => setStep2(false)}>
                            <Icon path={mdiClose}
                                size={.7}
                                color="#565656" />
                        </div>
                        <div>
                            <label class="container">Randonnée
                                <input type="checkbox" onChange={(e) => {let newCheck = valStep2; newCheck.randonnee = e.target.value; setValStep2(newCheck)}}/>
                                <span class="checkmark"></span>
                            </label>
                            <label class="container">Gastronomie
                                <input type="checkbox" onChange={(e) => {let newCheck = valStep2; newCheck.Gastronomie = e.target.value; setValStep2(newCheck)}}/>
                                <span class="checkmark"></span>
                            </label>
                            <label class="container">Activités de plein air
                                <input type="checkbox" onChange={(e) => {let newCheck = valStep2; newCheck.pleinAir = e.target.value; setValStep2(newCheck)}}/>
                                <span class="checkmark"></span>
                            </label>
                            <label class="container">Sites Culturels
                                <input type="checkbox" onChange={(e) => {let newCheck = valStep2; newCheck.culturels = e.target.value; setValStep2(newCheck)}} />
                                <span class="checkmark"></span>
                            </label>
                            <label class="container">Shopping
                                <input type="checkbox" onChange={(e) => {let newCheck = valStep2; newCheck.shopping = e.target.value; setValStep2(newCheck)}}/>
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <div className='ctn-more-search'>
                            <div>
                                une idée en plus ?
                            </div>
                            <input type="text" name="" placeholder='Je veux découvrir la cuisine locale.' id="" />
                        </div>
                        <button className='primary-button btn-mod-2'>
                            Ton voyage est prêt
                        </button>
                    </div>
                    }
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
                                    <div className='typeButton' onClick={() => setActiveType("Evasion")}>
                                        <Icon path={mdiRoadVariant}
                                            size={1}
                                            color="#565656" />
                                        Road-Trip
                                    </div>
                                </div>
                                <div>
                                    <div className='typeButton' onClick={() => setActiveType("Evasion")}>
                                        <Icon path={mdiBagPersonalOutline}
                                            size={1}
                                            color="#565656" />
                                        Sac à dos
                                    </div>
                                </div>
                            </> :
                            <>
                                <div>
                                    <div className='typeButton' onClick={() => setActiveType("Evasion")}>
                                        <Icon path={mdiCalendarWeekendOutline}
                                            size={1}
                                            color="#565656" />
                                        Week-end
                                    </div>
                                </div>
                                <div>
                                    <div className='typeButton' onClick={() => setActiveType("Evasion")}>
                                        <Icon path={mdiCalendarBlank}
                                            size={1}
                                            color="#565656" />
                                        Vacances
                                    </div>
                                </div>
                            </>
                        }
                    </div>
                    <GooglePlacesAutocomplete
                        apiKey="AIzaSyBIfq5o0rdL8PRihvRJSB3GDgZ-Z5ubeMk"
                        selectProps={{
                            placeholder: 'Votre destination',
                            onChange: setDestination
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
                    <button className='primary-button' onClick={() => step2()}>
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
            <div className='bg-green bg-green2' style={{marginTop: '120px'}}>
            <div className='title' style={{ paddingLeft: '80px', paddingTop: "20px", textAlign: 'left' }}>
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
                                        <div className='ctnName' style={{backgroundColor: '#a4c2a1'}}>
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
                                    <div className='ctnName' style={{backgroundColor: '#a4c2a1'}}>
                                        {el.content[0].name}
                                    </div>
                                </div>
                            </div>
                            <div className='slideLastBlog' style={{ backgroundImage: "url(" + el.content[1].picture + ")", height: '220px' }}>
                                <div className='ctnSlide'>
                                    <div className='ctnName' style={{backgroundColor: '#a4c2a1'}}>
                                        {el.content[1].name}
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>)
                    }

                })}
            </Swiper>

            </div>
            <div style={{width: '75%', marginTop: "450px", position: 'relative', marginBottom: '100px'}}>
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
