import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { getValuesByProperty } from '../utils/utils';
import '../styles/missionsFilter.css';

function MissionsFilter({ missions }) {
    const missionsRockets = missions.map(mission => mission.rocket);
    const missionsLauchSites = missions.map(mission => mission.launch_site);

    const rockets = getValuesByProperty(missionsRockets, 'rocket_name');
    const lauchSites = getValuesByProperty(missionsLauchSites, 'site_name');
    const lauchYears = getValuesByProperty(missions, 'launch_year');
    return (
        <section className="">
            <form className="form">
                <nav role="navigation">
                    <ul>
                        <li>
                            <a href="#/" aria-haspopup="true">
                                Launch Sites
                            </a>
                            <ul className="dropdown" aria-label="submenu">
                                {lauchSites.map(site => (
                                    <li key={site}>
                                        <a href="#/">{site}</a>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        <li>
                            <a href="#/" aria-haspopup="true">
                                Rockets
                            </a>
                            <ul className="dropdown" aria-label="submenu">
                                {rockets.map(rocket => (
                                    <li key={rocket}>
                                        <a href="#/">{rocket}</a>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        <li>
                            <a href="#/" aria-haspopup="true">
                                Launch Year
                            </a>
                            <ul className="dropdown" aria-label="submenu">
                                {lauchYears.map(year => (
                                    <li key={year}>
                                        <a href="#/">{year}</a>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    </ul>
                </nav>
            </form>
        </section>
    );
}

MissionsFilter.propTypes = {
    missions: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default memo(MissionsFilter);
