import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';

//icones
import Icon from '@mdi/react';
import { mdiAccount, mdiChevronLeft, mdiChevronRight } from '@mdi/js';

//images
import Rain from '../assets/weather/partly_cloudy.png'
import Money from '../assets/icons/money.png'
import Card from '../assets/icons/card.png'
import Time from '../assets/icons/time.png'

const temperatureData = [
    { day: 'Lundi', temperature: "25°/27°", title: "rain", date: "15/04" },
    { day: 'Mardi', temperature: "25°/27°", title: "rain", date: "15/04" },
    { day: 'Mercredi', temperature: "25°/27°", title: "rain", date: "15/04" },
    { day: 'Jeudi', temperature: "25°/27°", title: "rain", date: "15/04" },
    { day: 'Vendredi', temperature: "25°/27°", title: "rain", date: "15/04" },
    { day: 'Lundi', temperature: "25°/27°", title: "rain", date: "15/04" },
    { day: 'Mardi', temperature: "25°/27°", title: "rain", date: "15/04" },
    { day: 'Mercredi', temperature: 22, title: "rain", date: "15/04" },
    { day: 'Jeudi', temperature: 23, title: "rain", date: "15/04" },
    { day: 'Vendredi', temperature: 24, title: "rain", date: "15/04" },
];

const Marker = ({ text }) => <div>{text}</div>;

function Travel(props) {
    const [activeIndex, setActiveIndex] = useState(0);

    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };

    const handleNext = () => {
        setActiveIndex(activeIndex === temperatureData.length - 1 ? 0 : activeIndex + 1);
    };

    const handlePrev = () => {
        setActiveIndex(activeIndex === 0 ? temperatureData.length - 1 : activeIndex - 1);
    };

    const scrollTo = (id) => {
        const element = document.querySelector(id);
        element.scrollIntoView({ behavior: 'smooth' });
      };

    return (
        <>
            <div id='headerTravel' style={{ backgroundImage: "url(https://images8.alphacoders.com/354/354497.jpg)" }}>
                <div>
                    <span className='primary'>
                        Lisbonne
                    </span>
                    du
                    <span className='primary'>
                        15 avril
                    </span>
                    au
                    <span className='primary'>
                        2 mai
                    </span>
                </div>
            </div>
            <div className='ctn-carousel-weather'>
                <div>
                    <Icon path={mdiChevronRight}
                        size={1}
                        horizontal
                        vertical
                        color="black"/>
                </div>
                <div className="weather-carousel">
                    {temperatureData.map((data, i) => {
                        return (
                            <div key={i}>
                                <div>
                                    {data.day}
                                </div>
                                <div className='grey'>
                                    {data.date}
                                </div>
                                <img src={Rain} alt="" width={'80px'} />
                                <div>
                                    {data.temperature}
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div>
                    <Icon path={mdiChevronLeft}
                        size={1}
                        horizontal
                        vertical
                        color="black"/>
                </div>
            </div>
            <div className='ctn-desc'>
                <div className='bg-green w-50' style={{ textAlign: 'left' }}>
                    <div className='title'>
                        Description
                    </div>
                    <div className='desc'>
                        Capitale du Portugal, Lisbonne, cette sublime ville ensoleillée du sud ouest de l’Europe possède tous les atouts pour séduire les voyageurs. De ses rues typiques en pente, ses bâtiments colorés et ses spécialités culinaires, la ville aux 7 collines est devenue un incontournable des week-end détente (ou pas !). Impossible de s’y ennuyer ! Qu’on soit adepte de longues balades en ville, féru d’Histoire ou fêtard invétéré, partir à Lisbonne est toujours une bonne idée.
                    </div>
                </div>
                <div className='w-50 centeredPicture' style={{ backgroundImage: "url(https://media.routard.com/image/81/9/barcelone-parc-guell.1475819.142.jpg)" }} />
            </div>
            <div className='ctn-infos'>
                <div className='w-50 info-left'>
                    <div className='underline'>
                        Infos utiles
                    </div>
                    <div className='ctn-all-infos'>
                        <div className='ctn-info-mon'>
                            <div className='ctn-mon'>
                                <img src={Money} width={'25px'} alt="" />
                            </div>
                            <div>
                                <div className='grey'>
                                    Devise
                                </div>
                                <div>
                                    Euro
                                </div>
                            </div>
                        </div>
                        <div className='ctn-info-mon'>
                            <div className='ctn-mon'>
                                <img src={Time} width={'25px'} alt="" />
                            </div>
                            <div>
                                <div className='grey'>
                                    Décalage horaire
                                </div>
                                <div>
                                    -1h
                                </div>
                            </div>
                        </div>
                        <div className='ctn-info-mon'>
                            <div className='ctn-mon'>
                                <img src={Card} width={'25px'} alt="" />
                            </div>
                            <div>
                                <div className='grey'>
                                    Papiers
                                </div>
                                <div>
                                    Carte nationale d'identité, Passeport
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-50 ctn-gallery'>
                    <div>
                        <img src={"https://lepetitjournal.com/sites/default/files/2023-01/vue%20du%20littoral-barcelona%3AHEMAV.jpg"} width={'100%'} height={"100%"} className='img-gallery' alt="" />
                    </div>
                    <div>
                        <img src={"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/4d/45/49/province-of-barcelona.jpg?w=700&h=500&s=1"} width={'100%'} height={"100%"} className='img-gallery' alt="" />
                    </div>
                    <div className='position-relative'>
                        <img src={"https://cdn.pixabay.com/photo/2015/07/09/23/09/cadaques-838724_960_720.jpg"} width={'100%'} height={"100%"} className='img-gallery' alt="" />
                        <div className='overlay'>
                            +10
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-50 ctn-button'>
                <button className='primary-button'>
                    Aller plus loin
                </button>
            </div>
            <div className='bg-green' style={{marginTop: '80px', marginBottom: '80px', justifyContent: 'space-around', display: 'flex'}}>
                <button className='primary-button' style={{backgroundColor: "#003580"}}>
                    Booking
                </button>
                <button className='primary-button' style={{backgroundColor: "#ff690f"}}>
                    Kayak
                </button>
                <button className='primary-button' style={{backgroundColor: "#0770e3"}}>
                    Skyscanner
                </button>
            </div>
            <div className='ctn-proposition'>
                <div className='proposition'>
                    <div className='title-planning'>
                        Proposition de planning
                    </div>
                    <div className='ctn-desc-propo'>
                        <div className='desc-proposition'>
                            <span className='primary'>
                                15 Avril
                            </span>
                            <span>
                                -
                            </span>
                            <span className=''>
                                Découverte de la vieille ville
                            </span>
                        </div>
                        <div className='desc-proposition'>
                            <span className='primary'>
                                16 Avril
                            </span>
                            <span>
                                -
                            </span>
                            <span className=''>
                                Visite du château Saint-Georges
                            </span>
                        </div>
                        <div className='desc-proposition'>
                            <span className='primary'>
                                17 Avril
                            </span>
                            <span>
                                -
                            </span>
                            <span className=''>
                                Découverte du quartier de Baixa
                            </span>
                        </div>
                        <div className='desc-proposition'>
                            <span className='primary'>
                                18 Avril
                            </span>
                            <span>
                                -
                            </span>
                            <span className=''>
                                Découverte de la vieille ville
                            </span>
                        </div>
                    </div>
                    <button className='primary-button' onClick={() => scrollTo("#planning")}>
                        Detail du planning
                    </button>
                </div>
                <div className='w-50' style={{ height: '560px' }}>
                    <div style={{ height: '100%', width: '100%' }}>
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: "AIzaSyA2YQzd_89Par1Ev0SOoT7wXRaPUtVhya0" }}
                            defaultCenter={defaultProps.center}
                            defaultZoom={defaultProps.zoom}
                        >
                            <Marker
                                lat={59.955413}
                                lng={30.337844}
                                text="My Marker"
                            />
                        </GoogleMapReact>
                    </div>
                    <div>
                        <button className='secondary-button' style={{ width: '100%' }}>
                            Regénèrer Nouveau planning
                        </button>
                    </div>
                </div>
            </div>
            <div className='bg-green mt-3 propo-planning'>
                Proposition de planning
            </div>
            <div id='planning'>
                <div className='ctn-detail-planning'>
                    <div className='w-50'>
                        <div className='desc-proposition'>
                            <span className='primary'>
                                15 Avril
                            </span>
                            <span>
                                -
                            </span>
                            <span className=''>
                                Découverte de la vieille ville
                            </span>
                        </div>
                        <div className='long-text'>
                            Le vieux quartier, également connu sous le nom d'Alfama, est l'un des quartiers les plus anciens et les plus pittoresques de Lisbonne. C'est un labyrinthe de rues pavées, d'escaliers en colimaçon et de maisons blanchies à la chaux, qui s'étend sur la colline du château Saint-Georges jusqu'au Tage.

                            En visitant le vieux quartier, vous pourrez découvrir l'histoire et la culture de Lisbonne en explorant ses rues étroites et ses maisons traditionnelles. Vous pourrez visiter la cathédrale de Lisbonne, qui est l'un des plus anciens bâtiments de la ville, datant du XIIe siècle.

                            Une des attractions les plus populaires de l'Alfama est le Miradouro de Santa Luzia, une terrasse panoramique offrant une vue imprenable sur le fleuve Tage et le vieux quartier. Vous pourrez également vous promener dans les ruelles escarpées de l'Alfama et découvrir des petites places cachées, des églises historiques et des boutiques d'artisanat.
                        </div>
                        <div className='long-text'>
                            Le vieux quartier, également connu sous le nom d'Alfama, est l'un des quartiers les plus anciens et les plus pittoresques de Lisbonne. C'est un labyrinthe de rues pavées, d'escaliers en colimaçon et de maisons blanchies à la chaux, qui s'étend sur la colline du château Saint-Georges jusqu'au Tage.

                            En visitant le vieux quartier, vous pourrez découvrir l'histoire et la culture de Lisbonne en explorant ses rues étroites et ses maisons traditionnelles. Vous pourrez visiter la cathédrale de Lisbonne, qui est l'un des plus anciens bâtiments de la ville, datant du XIIe siècle.
                        </div>
                    </div>
                    <div className='w-50 position-relative'>
                        <img src="https://lepetitjournal.com/sites/default/files/2023-01/vue%20du%20littoral-barcelona%3AHEMAV.jpg" width={"100%"} alt="" />
                        <div className='weather-absolute'>
                            <div>
                                Samedi
                            </div>
                            <div className='grey'>
                                17/12
                            </div>
                            <img src={Rain} alt="" width={'80px'} />
                            <div>
                                14
                            </div>
                        </div>
                    </div>
                </div>

                <div className='ctn-detail-planning'>
                    <div className='w-50 position-relative'>
                        <img src="https://lepetitjournal.com/sites/default/files/2023-01/vue%20du%20littoral-barcelona%3AHEMAV.jpg" width={"100%"} alt="" />
                        <div className='weather-absolute'>
                            <div>
                                Samedi
                            </div>
                            <div className='grey'>
                                17/12
                            </div>
                            <img src={Rain} alt="" width={'80px'} />
                            <div>
                                14
                            </div>
                        </div>
                    </div>
                    <div className='w-50'>
                        <div className='desc-proposition'>
                            <span className='primary'>
                                15 Avril
                            </span>
                            <span>
                                -
                            </span>
                            <span className=''>
                                Découverte de la vieille ville
                            </span>
                        </div>
                        <div className='long-text'>
                            Le vieux quartier, également connu sous le nom d'Alfama, est l'un des quartiers les plus anciens et les plus pittoresques de Lisbonne. C'est un labyrinthe de rues pavées, d'escaliers en colimaçon et de maisons blanchies à la chaux, qui s'étend sur la colline du château Saint-Georges jusqu'au Tage.

                            En visitant le vieux quartier, vous pourrez découvrir l'histoire et la culture de Lisbonne en explorant ses rues étroites et ses maisons traditionnelles. Vous pourrez visiter la cathédrale de Lisbonne, qui est l'un des plus anciens bâtiments de la ville, datant du XIIe siècle.

                            Une des attractions les plus populaires de l'Alfama est le Miradouro de Santa Luzia, une terrasse panoramique offrant une vue imprenable sur le fleuve Tage et le vieux quartier. Vous pourrez également vous promener dans les ruelles escarpées de l'Alfama et découvrir des petites places cachées, des églises historiques et des boutiques d'artisanat.
                        </div>
                        <div className='long-text'>
                            Le vieux quartier, également connu sous le nom d'Alfama, est l'un des quartiers les plus anciens et les plus pittoresques de Lisbonne. C'est un labyrinthe de rues pavées, d'escaliers en colimaçon et de maisons blanchies à la chaux, qui s'étend sur la colline du château Saint-Georges jusqu'au Tage.

                            En visitant le vieux quartier, vous pourrez découvrir l'histoire et la culture de Lisbonne en explorant ses rues étroites et ses maisons traditionnelles. Vous pourrez visiter la cathédrale de Lisbonne, qui est l'un des plus anciens bâtiments de la ville, datant du XIIe siècle.
                        </div>
                    </div>
                </div>
                <div className='ctn-detail-planning'>
                    <div className='w-50'>
                        <div className='desc-proposition'>
                            <span className='primary'>
                                15 Avril
                            </span>
                            <span>
                                -
                            </span>
                            <span className=''>
                                Découverte de la vieille ville
                            </span>
                        </div>
                        <div className='long-text'>
                            Le vieux quartier, également connu sous le nom d'Alfama, est l'un des quartiers les plus anciens et les plus pittoresques de Lisbonne. C'est un labyrinthe de rues pavées, d'escaliers en colimaçon et de maisons blanchies à la chaux, qui s'étend sur la colline du château Saint-Georges jusqu'au Tage.

                            En visitant le vieux quartier, vous pourrez découvrir l'histoire et la culture de Lisbonne en explorant ses rues étroites et ses maisons traditionnelles. Vous pourrez visiter la cathédrale de Lisbonne, qui est l'un des plus anciens bâtiments de la ville, datant du XIIe siècle.

                            Une des attractions les plus populaires de l'Alfama est le Miradouro de Santa Luzia, une terrasse panoramique offrant une vue imprenable sur le fleuve Tage et le vieux quartier. Vous pourrez également vous promener dans les ruelles escarpées de l'Alfama et découvrir des petites places cachées, des églises historiques et des boutiques d'artisanat.
                        </div>
                        <div className='long-text'>
                            Le vieux quartier, également connu sous le nom d'Alfama, est l'un des quartiers les plus anciens et les plus pittoresques de Lisbonne. C'est un labyrinthe de rues pavées, d'escaliers en colimaçon et de maisons blanchies à la chaux, qui s'étend sur la colline du château Saint-Georges jusqu'au Tage.

                            En visitant le vieux quartier, vous pourrez découvrir l'histoire et la culture de Lisbonne en explorant ses rues étroites et ses maisons traditionnelles. Vous pourrez visiter la cathédrale de Lisbonne, qui est l'un des plus anciens bâtiments de la ville, datant du XIIe siècle.
                        </div>
                    </div>
                    <div className='w-50 position-relative'>
                        <img src="https://lepetitjournal.com/sites/default/files/2023-01/vue%20du%20littoral-barcelona%3AHEMAV.jpg" width={"100%"} alt="" />
                        <div className='weather-absolute'>
                            <div>
                                Samedi
                            </div>
                            <div className='grey'>
                                17/12
                            </div>
                            <img src={Rain} alt="" width={'80px'} />
                            <div>
                                14
                            </div>
                        </div>
                    </div>
                </div>

                <div className='ctn-detail-planning'>
                    <div className='w-50 position-relative'>
                        <img src="https://lepetitjournal.com/sites/default/files/2023-01/vue%20du%20littoral-barcelona%3AHEMAV.jpg" width={"100%"} alt="" />
                        <div className='weather-absolute'>
                            <div>
                                Samedi
                            </div>
                            <div className='grey'>
                                17/12
                            </div>
                            <img src={Rain} alt="" width={'80px'} />
                            <div>
                                14
                            </div>
                        </div>
                    </div>
                    <div className='w-50'>
                        <div className='desc-proposition'>
                            <span className='primary'>
                                15 Avril
                            </span>
                            <span>
                                -
                            </span>
                            <span className=''>
                                Découverte de la vieille ville
                            </span>
                        </div>
                        <div className='long-text'>
                            Le vieux quartier, également connu sous le nom d'Alfama, est l'un des quartiers les plus anciens et les plus pittoresques de Lisbonne. C'est un labyrinthe de rues pavées, d'escaliers en colimaçon et de maisons blanchies à la chaux, qui s'étend sur la colline du château Saint-Georges jusqu'au Tage.

                            En visitant le vieux quartier, vous pourrez découvrir l'histoire et la culture de Lisbonne en explorant ses rues étroites et ses maisons traditionnelles. Vous pourrez visiter la cathédrale de Lisbonne, qui est l'un des plus anciens bâtiments de la ville, datant du XIIe siècle.

                            Une des attractions les plus populaires de l'Alfama est le Miradouro de Santa Luzia, une terrasse panoramique offrant une vue imprenable sur le fleuve Tage et le vieux quartier. Vous pourrez également vous promener dans les ruelles escarpées de l'Alfama et découvrir des petites places cachées, des églises historiques et des boutiques d'artisanat.
                        </div>
                        <div className='long-text'>
                            Le vieux quartier, également connu sous le nom d'Alfama, est l'un des quartiers les plus anciens et les plus pittoresques de Lisbonne. C'est un labyrinthe de rues pavées, d'escaliers en colimaçon et de maisons blanchies à la chaux, qui s'étend sur la colline du château Saint-Georges jusqu'au Tage.

                            En visitant le vieux quartier, vous pourrez découvrir l'histoire et la culture de Lisbonne en explorant ses rues étroites et ses maisons traditionnelles. Vous pourrez visiter la cathédrale de Lisbonne, qui est l'un des plus anciens bâtiments de la ville, datant du XIIe siècle.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Travel;