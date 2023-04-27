import React, { useState } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

import BgHome from '../assets/bg/bgHome.png'

import Icon from '@mdi/react';
import { mdiAccountMultiple, mdiCalendar, mdiRoadVariant } from '@mdi/js';

import DatePicker from '../components/DatePicker'

import 'swiper/css';
import 'swiper/css/effect-fade';

export default function Home() {
    const [activeType, setActiveType] = useState("Evasion");
    const [value, setValue] = useState(null);
    const [calendarDate, setCalendarDate] = useState(null);
    const [adultes, setAdultes] = useState(0);
    const [enfants, setEnfants] = useState(0);

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
                                <input type="number" name="adultes"value={adultes} onChange={(e) => setAdultes(e.target.value)} min={0} max={10} id="" />
                            </div>
                        </div>
                        <div>
                            Enfant(s)
                            <div className='position-relative'>
                                <Icon path={mdiAccountMultiple}
                                    size={1}
                                    className="iconabs"
                                    color="#565656" />
                                <input type="number" name="enfant"value={enfants} onChange={(e) => setEnfants(e.target.value)} min={0} max={10} id="" />
                            </div>
                        </div>
                    </div>
                    <button className='primary-button'>
                        Aller plus loin
                    </button>
                </div>
            </header>

            <Swiper
                spaceBetween={0}
                slidesPerView={"auto"}
                loop={true}
                grabCursor={true}
                pagination={true}
                modules={[Pagination]}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {[1, 2, 3].map((i, el) => {
                    return <SwiperSlide>Slide {el}</SwiperSlide>;
                })}
            </Swiper>
        </>
    )
}
