import React from 'react';
import styled from 'styled-components';
import {SkillTagDisplay} from './SkillTag';

const MeterUnit = styled.div`

`

const Meter = styled.div`

`

function MeterDisplay(props) {

    return (
        <Meter>
            <MeterUnit/>
            <MeterUnit/>
            <MeterUnit/>
        </Meter>
    )
}

const MeterLabel = styled.div`

`

const TotalMeter = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1 0 auto;
`

function TotalMeterDisplay(props) {

    return (
        <TotalMeter className="total-meter">
            <MeterLabel className="meter-label">Total Usage:</MeterLabel>
            <MeterDisplay/>
        </TotalMeter>
    )
}

const RecenceyMeter = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1 0 auto;
`

function RecenceyMeterDisplay(props) {

    return (
        <RecenceyMeter className="recencey-meter">
            <MeterLabel className="meter-label">Recencey:</MeterLabel>
            <MeterDisplay/>
        </RecenceyMeter>
    )

}

const UsageMeterView = styled.div`
    display: flex;
    flex-direction: column;
    flex: 2 0 auto;
`

function UsageMeterDisplay(props) {

    return (
        <UsageMeterView className="usage-meter-view">
            <TotalMeterDisplay/>
            <RecenceyMeterDisplay/>
        </UsageMeterView>
    )
}

const SkillTagView = styled.div`
    flex: 1 0 auto;
    margin: 0 auto;
    text-align: center;
`

const SkillMeterView = styled.div`
    display: flex;
    flex-direction: row;


`

function SkillMeterDisplay(props) {
    console.log("2 PROPS" + props.name);
    return (
        <SkillMeterView className="skill-meter-view">
            <SkillTagView className="skill-tag-view">
                <SkillTagDisplay name={props.name}/>
            </SkillTagView>
            <UsageMeterDisplay/>
        </SkillMeterView>
    )
}

const SkillView = styled.div`
    display: flex;
    flex: 1 0 auto;
    flex-direction: column;

    width: 33%;
    max-width: 326px;
    border: 1px solid red;
    margin-left: 10px;
    margin-top: 20px;

    max-height: 200px;
    min-width: 330px;
`

function SkillViewDisplay(props) {
    console.log('PROPS ' + props.name);
    return (
        <SkillView className="skill-view">
            <SkillMeterDisplay name={props.name}/>
        </SkillView>
    )
}

export {SkillViewDisplay}