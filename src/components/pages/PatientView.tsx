import * as React from "react";
import { InfoBox } from "../shared/InfoBox";

// tslint:disable:no-empty-interface
export interface IPatientViewProps{};
export interface IPatientViewState{};

// TODO: replace with real data
const DUMMYDATA = [
    {
        title: "Personal Info",
        // tslint:disable:object-literal-sort-keys
        boxData: {
            field: "Email",
            value: "JohnDoe@gmail.com",
        }
    },
    {
        title: "Billing Info",
        boxData: {
            field: "Current balance",
            value: "400",
        }
    }
];

class PatientView extends React.PureComponent<IPatientViewProps, IPatientViewState> {
    public render() {
        return (
            <InfoBox title={DUMMYDATA[0].title} boxData={DUMMYDATA[1].boxData} />
        ) 
    }
}

export default PatientView;
