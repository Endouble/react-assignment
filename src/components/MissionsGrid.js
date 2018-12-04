import React, { PureComponent } from 'react';
import { getPastLaunchesRequest } from '../requests';
import MissionCard from './MissionCard';
import '../styles/missionsGrid.css';

export default class LaunchesGrid extends PureComponent {
    componentIsmounted = false

    state = {
        launches: null,
    }

    componentDidMount() {
        this.componentIsmounted = true;
        this.getLaunches();
    }

    componentWillUnmount() {
        this.componentIsmounted = false;
        this.getLaunches();
    }

    getLaunches = () => {
        getPastLaunchesRequest().then(({ data }) => {
            if (!this.componentIsmounted) return;
            this.setState({ launches: data });
        });
    }

    render() {
        const { launches } = this.state;
        if (!launches) {
            return <h1>Loading...</h1>;
        }
        if (launches.length < 1) {
            return <h1>No Mission Found</h1>;
        }
        return (
            <section className="missions">
                {launches.map(launch => (
                    <MissionCard launch={launch} />
                ))}
            </section>
        );
    }
}
