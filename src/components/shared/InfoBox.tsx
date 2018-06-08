import { Button, Card, Elevation } from "@blueprintjs/core";
import * as React from "react";
import { IBoxData } from '../../model/shared';

// tslint:disable:no-empty-interface
export interface IInfoBoxProps {
    title: string;
    boxData: IBoxData[];
};
export interface IInfoBoxState {};

class InfoBox extends React.PureComponent<IInfoBoxProps, IInfoBoxState> {
    public render() {
        const { title, boxData } = this.props;
        return (
        <Card interactive={true} elevation={Elevation.TWO}>
            <h5><a href="#">{title}</a></h5>
            {
                boxData.forEach(data => (
                    <p> {data.field} : {data.value} </p>
                ))
            }
            <Button>Submit</Button>
        </Card>
        )
    }
}

export default InfoBox;