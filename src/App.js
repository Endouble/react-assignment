import React, { PureComponent } from 'react';
import { getPastLaunchesRequest } from './requests';
import MissionsGrid from './components/MissionsGrid';
import MissionsFilter from './components/MissionsFilter';
import Modal from './components/Modal';
import MissionModalContent from './components/MissionModalContent';

class App extends PureComponent {
    componentIsMounted = false

    state = {
        missions: null,
        filterByMissionLaunchSite: null,
        filterByMissionRocket: null,
        filterByMissionLauchYear: null,
        modalContent: null,
        lastMissionSeen: null,
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

    onFilter = (value, { target }) => {
        const name = target.getAttribute('name');
        this.setState({ [name]: value });
    }

    onOpenModal = (details) => {
        this.setState(
            {
                lastMissionSeen: details.flight_number,
                modalContent: details,
            },
            () => this.modalCloseButton.focus(),
        );
    }

    render() {
        const {
            missions,
            filterByMissionLaunchSite,
            filterByMissionRocket,
            filterByMissionLauchYear,
            modalContent,
            lastMissionSeen,
        } = this.state;
        if (!missions) {
            return <h1>Loading...</h1>;
        }
        if (missions.length === 0) {
            return <h1>No Mission Found</h1>;
        }
        return (
            <div className="App">
                <MissionsFilter
                    missions={missions}
                    onFilter={this.onFilter}
                    filters={{
                        filterByMissionLaunchSite,
                        filterByMissionRocket,
                        filterByMissionLauchYear,
                    }}
                />
                <MissionsGrid
                    missions={missions}
                    filters={{
                        filterByMissionLaunchSite,
                        filterByMissionRocket,
                        filterByMissionLauchYear,
                    }}
                    onOpenModal={this.onOpenModal}
                    openModalButtonRef={(flightNumber, button) => {
                        this[`opened-mission-${flightNumber}`] = button;
                    }}
                />
                {modalContent && (
                    <Modal
                        ariaLabel="SpaceX Mission Details"
                        onClose={() => {
                            this.setState({ modalContent: null });
                            this[`opened-mission-${lastMissionSeen}`].focus();
                        }}
                        closeButtonRef={(n) => {
                            this.modalCloseButton = n;
                        }}
                    >
                        <MissionModalContent {...modalContent} />
                    </Modal>
                )}
            </div>
        );
    }
}

export default App;
