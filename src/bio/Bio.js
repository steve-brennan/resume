import React, { Component } from 'react';
import styled from 'styled-components';

const BioSection = styled.section`
    margin: 0 auto;
    width: 100%;
    height: inherit;
`;

const BioView = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    justify-content: flex-start;
`;

const BioBracket = styled.div`
    flex: 1 1 auto;
    font-size: ${props => props.outer === true ? '50px' : '12px'};
    padding-left: 25px;
    color: ${props => props.theme.primaryColor};
    max-height: 75px;
    
`

const BioProperty = styled.div`
    display: inline-flex;
    flex-direction: row;
    flex-wrap: no-wrap;
    flex: 1 0 auto;
    font-family: ${props => props.theme.primaryFontFamily};
    max-height: 30px;
    /*align-content: flex-start;*/
    justify-content: flex-start;
    margin-left: 0px;

`

const BioPropertyKey = styled.div`
    flex: 0 1 auto;
    text-align: left;
    padding-left: 100px;
    display: inline-block;
    color: ${props => props.theme.primaryColor};
    height: 20px;
`

const BioPropertyValue = styled.div`
    flex: 0 1 auto;
    text-align: left;
    display: inline-block;
    padding-left: 10px;

    height: 20px;
`
function BioPropertyDisplay(props) {

    return (
        <BioProperty className="bio-property">
            <BioPropertyKey className="bio-property-key">{props.bioKey}</BioPropertyKey>
            <BioPropertyValue className="bio-property-value">{props.bioValue}</BioPropertyValue>
        </BioProperty>
    )
}

function BioBracketDisplay(props) {
    
    return ( 
        <BioBracket className="bio-bracket" outer={props.outer}>{ props.orient === 'open' ? '{' : '}' }</BioBracket>
    )
}

const BioCloseBracket = styled.div`

`


class Bio extends Component {

    render() {
        return (
            <BioSection className="bio-section">
                <BioView className="bio-view">
                    <BioBracketDisplay orient={'open'} outer={true}/>
                    <BioPropertyDisplay bioKey={'firstName:'} bioValue={'Steve,'}/>
                    <BioPropertyDisplay bioKey={'lastName:'} bioValue={'Brennan,'}/>
                    <BioPropertyDisplay bioKey={'email:'} bioValue={'brennanstevenp@gmail.com,'}/>
                    <BioPropertyDisplay bioKey={'phone:'} bioValue={'0433 856 533,'}/>
                    <br/>
                    <BioPropertyDisplay bioKey={'blurb:'} bioValue={'The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.'}/>
                    <br/>
                    <br/>
                    <BioPropertyDisplay bioKey={'myDrivers:'} bioValue={'[The people I work with, The technologies I work with, The projects I work on, Money]'}/>
                    <BioPropertyDisplay bioKey={'gitHubLink:'} bioValue={<a target="_blank" href="https://github.com/steve-brennan" >https://github.com/steve-brennan</a>}/>
                    <BioPropertyDisplay bioKey={'linkedInLink'} bioValue={<a target="_blank" href="https://www.linkedin.com/in/steven-brennan-1349864/">https://www.linkedin.com/in/steven-brennan-1349864/</a>}/>
                    <BioBracketDisplay orient={'closed'} outer={true}/>
                </BioView>
            </BioSection>
        );
    }
}

export default Bio;