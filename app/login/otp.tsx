import * as React from "react";
import {Dimensions} from "react-native";

const {width, height} = Dimensions.get('window');

const OTP = () => {
    return (
        <div style={{
            width: '100%',
            height: '100%',
            position: 'relative',
            background: '#F9F9F9',
            overflow: 'hidden'
        }}>
            <div style={{
                left: 32,
                top: 558,
                position: 'absolute',
                color: '#0D0140',
                fontSize: 28,
                fontFamily: 'DM Sans',
                fontWeight: '700',
                wordWrap: 'break-word'
            }}>Verify Your Number
            </div>
            <div style={{
                width: 32,
                height: 35,
                left: 371,
                top: 795,
                position: 'absolute',
                transform: 'rotate(90deg)',
                transformOrigin: '0 0'
            }}>
                <div style={{
                    width: 16.97,
                    height: 11.34,
                    left: 7.51,
                    top: 11.67,
                    position: 'absolute',
                    background: 'white'
                }}></div>
            </div>
            <div style={{
                left: 32,
                top: 599,
                position: 'absolute',
                color: '#524B6B',
                fontSize: 14,
                fontFamily: 'DM Sans',
                fontWeight: '400',
                wordWrap: 'break-word'
            }}>Enter the four digit code sent to +94 711427657
            </div>
            <div style={{
                width: 193,
                height: 207,
                left: -95,
                top: -14,
                borderRadius: 300,
                position: 'absolute',
                background: '#6A41FF'
            }}></div>
            <div style={{
                width: 193,
                height: 207,
                left: 27,
                top: -117,
                borderRadius: 300,
                position: 'absolute',
                background: '#150B3D'
            }}></div>
            <div style={{
                width: 150,
                height: 143,
                left: 336,
                top: 292,
                position: 'absolute',
                borderRadius: 300,
                background: '#6A41FF'
            }}></div>
            <div style={{width: 341, height: 56, left: 36, top: 670, position: 'absolute'}}>
                <div style={{
                    width: 66,
                    height: 56,
                    left: 92,
                    top: 0,
                    position: 'absolute',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    gap: 5,
                    display: 'inline-flex'
                }}>
                    <div style={{
                        width: 66,
                        height: 56,
                        background: 'rgba(225.21, 216.87, 255, 0.30)',
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                        borderBottom: '1px #6A41FF solid'
                    }}/>
                </div>
                <div style={{
                    width: 66,
                    height: 56,
                    left: 0,
                    top: 0,
                    position: 'absolute',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    gap: 5,
                    display: 'inline-flex'
                }}>
                    <div style={{
                        width: 66,
                        height: 56,
                        background: 'rgba(225.21, 216.87, 255, 0.30)',
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                        borderBottom: '1px #6A41FF solid'
                    }}/>
                </div>
                <div style={{
                    width: 65,
                    height: 56,
                    left: 183,
                    top: 0,
                    position: 'absolute',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    gap: 5,
                    display: 'inline-flex'
                }}>
                    <div style={{
                        height: 56,
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        gap: 5,
                        display: 'flex'
                    }}>
                        <div style={{
                            width: 65,
                            height: 56,
                            background: 'rgba(225.21, 216.87, 255, 0.30)',
                            borderTopLeftRadius: 8,
                            borderTopRightRadius: 8,
                            borderBottom: '1px #6A41FF solid'
                        }}/>
                    </div>
                </div>
                <div style={{
                    width: 66,
                    height: 56,
                    left: 275,
                    top: 0,
                    position: 'absolute',
                    background: 'rgba(225.21, 216.87, 255, 0.30)',
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                    borderBottom: '1px #6A41FF solid'
                }}/>
            </div>
            <div style={{
                width: 'calc(100% - 98px)',
                height: 48,
                paddingTop: 8,
                paddingBottom: 8,
                paddingLeft: 17,
                paddingRight: 16,
                left: 28,
                top: 779,
                position: 'absolute',
                background: '#130160',
                borderRadius: 14,
                border: '1.20px rgba(255, 255, 255, 0.20) solid',
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: 37,
                display: 'inline-flex'
            }}>
                <div style={{
                    width: '100%',
                    color: 'white',
                    fontSize: 14,
                    fontFamily: 'DM Sans',
                    fontWeight: '700',
                    lineHeight: 24,
                    wordWrap: 'break-word'
                }}>Next
                </div>
                <div style={{
                    width: 32,
                    height: 35,
                    position: 'relative',
                    transform: 'rotate(90deg)',
                    transformOrigin: '0 0'
                }}>
                    <div style={{
                        width: 16.97,
                        height: 11.34,
                        left: 7.51,
                        top: 11.67,
                        position: 'absolute',
                        background: 'white'
                    }}></div>
                </div>
            </div>
        </div>
    );
};

export default OTP;
