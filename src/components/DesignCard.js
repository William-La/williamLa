import React, { Component } from "react";

class DesignCard extends Component{
  render(){
    return(

  

        <div
          css={{
            marginLeft: "auto",
            marginRight: "auto",
            paddingBottom: "48px",
            position: "relative",
            zIndex: 3,
            maxWidth: "416px"
          }}
        >
          <div
            css={{
              borderRadius: "8px",
              boxShadow: "0 4px 24px 0 rgba(185, 185, 185, 0.5)",
              marginLeft: "13px",
              marginRight: "13px",
              background: "#ffffff"
            }}
          >
            <div
              css={{
                overflow: "hidden",
                borderTopLeftRadius: "inherit",
                borderTopRightRadius: "inherit"
              }}
            >
              <div
                css={{
                  background: `url(${
                    this.props.image
                  }) no-repeat center center`,
                  minHeight: "250px",
                  backgroundSize: "cover",
                  width: "100%",
                  borderTopLeftRadius: "inherit",
                  borderTopRightRadius: "inherit",
                  transition: "1s",
                  marginBottom: "0px"
                }}>
                  <div css={{
                    width: "250px",
                    height: "250px"
                  }}
                  onClick={this.props.click}
                  />
                 </div>
            </div>
            <div
              css={{
                position: "relative",
                padding: "16px 24px 24px 24px",
                lineHeight: "20px",
                overflow: "hidden",
                transition: "1s",
                minHeight: "210px"
              }}
            >
              <h3
                css={{
                  textTransform: "uppercase",
                  fontWeight: 800,
                  lineHeight: "28px",
                  color: "#00205b"
                }}
              >
                {this.props.name}
              </h3>
              <h2
                css={{
                  fontWeight: 500,
                  paddingTop: "8px",
                  lineHeight: "23px",
                }}
              >
                {this.props.title}
              </h2>
              <div css={{ textOverflow: "hidden" }}>
                <p
                  css={{
                    paddingTop: "24px",
                    transition: "1s",
                    marginBottom: "-400px",
                    lineHeight: "1.43",
                    color: "#565656"
                  }}
                >
                  {this.props.description}
                </p>
                
              </div>
            </div>
            <div
              css={{
                paddingLeft: "24px",
                paddingBottom: "24px",
              }}
            >
            
            </div>
          </div>
        </div>
        
    );
  }
}
export default DesignCard;
