import React, { PureComponent } from 'react';
import { getPastLaunchesRequest } from './requests';
import MissionsGrid from './components/MissionsGrid';
import MissionsFilter from './components/MissionsFilter';

class App extends PureComponent {
    componentIsMounted = false

    state = {
        missions: null,
        filterByMissionLaunchSite: null,
        filterByMissionRocket: null,
        filterByMissionLauchYear: null,
    }

    componentDidMount() {
        this.componentIsMounted = true;
        this.getLaunches();
    }

    componentWillUnmount() {
        this.componentIsMounted = false;
        this.getLaunches();
    }

    getLaunches = () => {
        getPastLaunchesRequest().then(({ data }) => {
            if (!this.componentIsMounted) return;
            this.setState({ missions: data });
        });
    }

    render() {
        const {
            missions,
            filterByMissionLaunchSite,
            filterByMissionRocket,
            filterByMissionLauchYear,
        } = this.state;
        if (!missions) {
            return <h1>Loading...</h1>;
        }
        if (missions.length === 0) {
            return <h1>No Mission Found</h1>;
        }
        return (
            <div className="App">
                <MissionsFilter missions={missions} />
                <MissionsGrid
                    missions={missions}
                    filters={{
                        filterByMissionLaunchSite,
                        filterByMissionRocket,
                        filterByMissionLauchYear,
                    }}
                />
            </div>
        );
    }
}

export default App;
