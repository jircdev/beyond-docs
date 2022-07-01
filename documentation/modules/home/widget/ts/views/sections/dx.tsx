import * as React from 'react';
import {BeyondSwiperSlider} from "@beyond/ui/swiper";
import {useHomeContext} from "../context";
import {BeyondImage} from "@beyond/ui/image";
import {Link} from '@beyond/ui/link';

export function DX() {
    const {texts: {experience, readMore, learnMore}} = useHomeContext();

    return (
        <>
            <article className="page-section primary-surface block__features gradient-one two-columns mv-200">
                <div/>
                <div className="container no-mv">
                    <div className="content">
                        <header className="header__section">
                            <span className="pretitle">DASHBOARD</span>
                            <h3 className="secondary">{experience.title}</h3>
                        </header>
                        <div className="flex-container flex-center-x container--md">
                            <p className="text-center">{experience.texts}</p>
                        </div>

                    </div>
                </div>

                <BeyondSwiperSlider
                    config={{
                        slidesPerView: 2,
                        spaceBetween: 10,
                        centeredSlides: true,
                        centeredSlidesBounds: true,
                        breakpoints: {
                            400: {
                                slidesPerView: 2,
                                spaceBetween: 10
                            },
                            600: {
                                slidesPerView: 3,
                                spaceBetween: 10
                            },
                            800: {
                                slidesPerView: 4,
                                spaceBetween: 15
                            }
                        }
                    }}
                    className="docs-home-slider">
                    <BeyondImage className="swiper-modal" alt="BeyondJS - Dashboard - code editor"
                                 src="/images/dashboard/v1/code-view.png"/>
                    <BeyondImage className="swiper-modal" alt="BeyondJS - Dashboard - compilation flow"
                                 src="/images/dashboard/v1/compilation-error-view.png"/>
                    <BeyondImage className="swiper-modal" alt="BeyondJS - Dashboard - compilation view"
                                 src="/images/dashboard/v1/compilation-view.png"/>

                    <BeyondImage className="swiper-modal" alt="BeyondJS - Dashboard - module form"
                                 src="/images/dashboard/v1/module-form-view.png"/>
                    <BeyondImage className="swiper-modal" alt="BeyondJS - Dashboard - module form, bundle selection "
                                 src="/images/dashboard/v1/module-form-view-2.png"/>
                    <BeyondImage className="swiper-modal" alt="BeyondJS - Dashboard - module deaail view"
                                 src="/images/dashboard/v1/module-view.png"/>
                    <BeyondImage className="swiper-modal" alt="BeyondJS - Dashboard - creating projects"
                                 src="/images/dashboard/v1/project-create-view.png"/>
                    <BeyondImage className="swiper-modal" alt="BeyondJS - Dashboard - project detail view"
                                 src="/images/dashboard/v1/project-view.png"/>

                    <BeyondImage className="swiper-modal" alt="BeyondJS - Dashboard - aside options"
                                 src="/images/dashboard/v1/project-view-aside.png"/>
                    <BeyondImage alt="BeyondJS - Dashboard - project list" className="swiper-modal"
                                 src="/images/dashboard/v1/projects.png"/>
                </BeyondSwiperSlider>

                <div className="container flex-container flex-center text-center">
                    <Link href="/docs/dashboard">{learnMore}</Link>
                </div>
            </article>
        </>
    )
}
