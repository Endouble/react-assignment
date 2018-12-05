import React, { memo } from 'react';
import PropTypes from 'prop-types';
import '../styles/missionsGrid.css';
import MissionCard from './MissionCard';

function MissionsGrid({ missions, filters }) {
    const { filterByMissionLaunchSite, filterByMissionRocket, filterByMissionLauchYear } = filters;
    return (
        <section className="missions">
            {missions
                .filter(mission => (filterByMissionLaunchSite
                    ? mission.launch_site.site_name === filterByMissionLaunchSite
                    : mission))
                .filter(mission => (filterByMissionRocket
                    ? mission.rocket.rocket_name === filterByMissionRocket
                    : mission))
                .filter(mission => (filterByMissionLauchYear
                    ? mission.launch_year === filterByMissionLauchYear
                    : mission))
                .map(mission => (
                    <MissionCard mission={mission} key={mission.flight_number} />
                ))}
        </section>
    );
}

MissionsGrid.propTypes = {
    missions: PropTypes.arrayOf(PropTypes.object).isRequired,
    filters: PropTypes.shape({
        filterByMissionLaunchSite: PropTypes.string,
        filterByMissionRocket: PropTypes.string,
        filterByMissionLauchYear: PropTypes.string,
    }).isRequired,
};

export default memo(MissionsGrid);
