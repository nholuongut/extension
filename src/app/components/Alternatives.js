import React, { Component, PropTypes } from 'react';


const styles = {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    minHeight: '225px',
    zIndex: 99999,
};

const Alternatives = ({recommendation, stylesUrl, imagesUrl}) => (
        <section id="lmem--alternatives--root" style={styles}>
            <link href='https://fonts.googleapis.com/css?family=Ubuntu:400,300,300italic,400italic,500,500italic,700,700italic' rel='stylesheet' type='text/css' />
            <link rel="stylesheet" href={stylesUrl} />

            <div className="main">
                <div className="wrapperframe">
                    <header className="sideframe lmem-header">
                        <div className="query-summary summary-contributor">
                            <div className="summary-detail-title">{ 'R' + String.fromCharCode(233) + 'sultats propos' + String.fromCharCode(233) + 's par' }</div>
                            <div>
                                <img src={ imagesUrl + "contributors/" + 1 + '.png' } />
                                <p>Maarten Samson</p>
                            </div>
                        </div>
                    </header>
                    <div className="mainframe"><div className="mainframe-inner">
                        <div className="highlight">
                            <ul className="summary-tags">
                                {recommendation.filters.map(filter => <li><b> {filter.label}</b></li>)}
                            </ul>
                            <div className="summary-reco-description">
                                { recommendation.alternatives[0].description }
                                <div className="button-directive">
                                    <a className="button with-image" target="_blank" href={ recommendation.alternatives[0].url_to_redirect } >
                                       <img src={ imagesUrl + 'arrow.svg' } className="picto" />
                                       <span className="button-label">
                                           { recommendation.alternatives[0].label }
                                       </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div></div>
                </div>

                <aside className="lmem-topbar fixed">
                    <div className="lmem-topbar-notification">

                        <div className="mainframe">
                            <div className="mainframe-inner">
                                <h1 className="lmem-topbar-title">
                                    { 'Le M' + String.fromCharCode(234) + 'me en Mieux' }
                                </h1>
                            </div>
                        </div>
                    </div>

                    <div className="button-wrapper">
                        <div className="button-directive">
                            <a title="" target="" className="button button-compact with-image">
                                <img src={ imagesUrl + 'arrow.svg' } className="lmem-controls-picto lmem-controls-close" />
                                <span className="button-label">{ 'R' + String.fromCharCode(233) + 'duire' }</span>
                            </a>
                        </div>
                    </div>

                    <a className="lmem-topbar-logo with-tooltip" href="">
                        <img src={ imagesUrl + 'logo-lmem.svg' } alt="" />
                        <span className="tooltip tooltip-right"><span>
                            { 'R' + String.fromCharCode(233) + 'duire le panneau comparatif' }
                        </span></span>
                    </a>
                </aside>

            </div>
        </section>
    );

Alternatives.propTypes = {
    recommendation: PropTypes.object.isRequired,
    stylesUrl: PropTypes.string.isRequired,
    imagesUrl: PropTypes.string.isRequired,
};

export default Alternatives;
