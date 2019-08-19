import React, { Component } from "react";
import Wrapper from "./Wrapper";


class orgCard extends Component{

    render(){
        return(
            <div
            css={{
            position: "relative",
            width: "100%",
            padding: "0 0 75px 0",
            "@media(max-width: 820px)": {
                padding: "0 0 0 0"
            }
            }}
        >
            <Wrapper>
            <div
                css={{
                display: "block",
                padding: "0 0 0 0",
                margin: "0 auto 0 auto",    
                }}
            >
                <div>
                    <img
                        css={{
                            float: `${this.props.textAlign}`,
                            maxHeight: "125px",
                            maxWidth: "125px",
                            width: "100%",
                            "@media(max-width: 820px)": {
                                marginTop: "25px",
                                float: "none",
                                display: "block",
                                marginLeft: "auto",
                                marginRight: "auto",
                            }
                        }}
                        src={this.props.img}
                        alt = {this.props.name}
                    />
                    <h3 css={{ 
                            display: "block",
                            lineHeight: "24px",
                            padding: "25px 0 0 0",
                            margin: `${this.props.align}`,
                            textAlign: `${this.props.textAlign}`,
                            "@media(max-width: 820px)": {
                                margin: "0 0 0 0",
                                padding: "15px 0 0 0",
                                textAlign: "center",
                            }
                        }}>
                        {this.props.name}
                        </h3>
                    <p css={{
                        display: "flex",
                        lineHeight: "24px",
                        margin: `${this.props.align}`,
                        fontColor: "#000000",
                        textAlign: `${this.props.textAlign}`,
                        "@media(max-width: 820px)": {
                            margin: "0 0 25px 0",
                            textAlign: "center",
                        }
                        }}>
                        {this.props.text}
                    </p>
                </div>
            </div>
            </Wrapper>
        </div>
      );
    }
 }
export default orgCard;
