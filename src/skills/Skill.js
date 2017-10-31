import React from 'react';
import styled from 'styled-components';
import {SkillTagDisplay} from './SkillTag';

const MeterUnit = styled.div`
    background-color: ${props => props.meterActive ? 'red' : 'white'};
    height: 5px;
    width: 33px;
    flex: 1 1 auto;
`

const Meter = styled.div`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100px;

`

function MeterDisplay(props) {

    return (
        <Meter className="meter">
            <MeterUnit className="meter-unit" meterActive={true}/>
            <MeterUnit className="meter-unit" meterActive={props.meterValue > 1 ? true: false }/>
            <MeterUnit className="meter-unit" meterActive={props.meterValue > 2 ? true: false}/>
        </Meter>
    )
}

const MeterLabel = styled.div`
    font-size: 66%;
    flex: 0.5 0 auto;
    width: 50px;
`

const TotalMeter = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1 0 auto;
`

function TotalMeterDisplay(props) {

    let meterValue = 0;
    if(props.usageTotal < 1) {
        meterValue = 1;
    } else if( props.usageTotal >= 3) {
        meterValue = 3;
    } else {
        meterValue = 2;
    }

    return (
        <TotalMeter className="total-meter">
            <MeterLabel className="meter-label">Total Usage:</MeterLabel>
            <MeterDisplay meterValue={meterValue}/>
        </TotalMeter>
    )
}

const RecenceyMeter = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1 0 auto;
`

function RecenceyMeterDisplay(props) {

    let meterValue = 0;
    if(props.usageRecencey < 1) {
        meterValue = 3;
    } else if(props.usageRecencey >= 3) {
        meterValue = 1;
    } else {
        meterValue =2;
    }

    return (
        <RecenceyMeter className="recencey-meter">
            <MeterLabel className="meter-label">Recencey:</MeterLabel>
            <MeterDisplay meterValue={meterValue} />
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
            <TotalMeterDisplay usageTotal={props.usageTotal}/>
            <RecenceyMeterDisplay usageRecencey={props.usageRecencey}/>
        </UsageMeterView>
    )
}

const SkillTagView = styled.div`
    flex: 1 0 auto;
    margin: 0 auto;
    text-align: center;

    width: 175px;
    margin-right: -25px;
`

const SkillMeterView = styled.div`
    display: flex;
    flex-direction: row;


`

function SkillMeterDisplay(props) {
    return (
        <SkillMeterView className="skill-meter-view">
            <SkillTagView className="skill-tag-view">
                <SkillTagDisplay name={props.name}/>
            </SkillTagView>
            <UsageMeterDisplay usageTotal={props.usageTotal} usageRecencey={props.usageRecencey}/>
        </SkillMeterView>
    )
}

const SkillView = styled.div`
    display: flex;
    flex: 1 0 auto;
    flex-direction: column;
    font-family: ${props => props.theme.primaryFontFamily};
    width: 33%;
    max-width: 326px;
    border: 1px solid ${props => props.theme.primaryColor};
    border-radius: 3px;
    margin-left: 10px;
    margin-top: 20px;

    max-height: 200px;
    min-width: 330px;
`

function SkillViewDisplay(props) {
    return (
        <SkillView className="skill-view">
            <SkillMeterDisplay name={props.name} usageTotal={props.usageTotal} usageRecencey={props.usageRecencey}/>
        </SkillView>
    )
}

export {SkillViewDisplay}