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
        <TotalMeter>
            <MeterLabel>Total Usage:</MeterLabel>
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
        <RecenceyMeter>
            <MeterLabel>Recencey:</MeterLabel>
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
        <UsageMeterView>
            <TotalMeterDisplay/>
            <RecenceyMeterDisplay/>
        </UsageMeterView>
    )
}

const SkillTagView = styled.div`
    flex: 1 0 auto;
`

const SkillMeterView = styled.div`
    display: flex;
    flex-direction: row;

`

function SkillMeterDisplay(props) {

    return (
        <SkillMeterView>
            <SkillTagView>
                <SkillTagDisplay name={props.name}/>
            </SkillTagView>
            <UsageMeterDisplay/>
        </SkillMeterView>
    )
}

const SkillView = styled.div`
    display: flex;
    flex-direction: column;
`

function SkillViewDisplay(props) {

    return (
        <SkillView>
            <SkillMeterDisplay/>
        </SkillView>
    )
}

export {SkillViewDisplay}