import React, {Component} from 'react'
import Svg, {Path} from 'react-native-svg';

export default class SvgLogoLoader extends Component {
    static defaultProps = {
        style: {},
    };

    render() {
        return (
            <Svg style={this.props.style} width="146" height="90" viewBox="0 0 146 90" fill="none">
                <Path
                    d="M6.64062 88.7788C6.79036 88.9285 6.97266 89.0034 7.1875 89.0034C7.40234 89.0034 7.58789 88.9285 7.74414 88.7788C7.8418 88.6746 7.91016 88.5542 7.94922 88.4175L10.3125 81.3179L12.7246 88.5542C12.7637 88.6323 12.819 88.7072 12.8906 88.7788C13.0404 88.9285 13.2227 89.0034 13.4375 89.0034C13.6523 89.0034 13.8346 88.9285 13.9844 88.7788C14.1406 88.6226 14.2188 88.437 14.2188 88.2222C14.2188 88.118 14.1992 88.0171 14.1602 87.9194L11.0449 78.564C11.0059 78.4663 10.9473 78.3719 10.8691 78.2808C10.7129 78.1375 10.5273 78.0659 10.3125 78.0659C10.0977 78.0659 9.91536 78.1375 9.76562 78.2808C9.68099 78.3719 9.61914 78.4663 9.58008 78.564L7.1875 85.7515L4.79492 78.564C4.75586 78.4663 4.69727 78.3719 4.61914 78.2808C4.46289 78.1375 4.27734 78.0659 4.0625 78.0659C3.84766 78.0659 3.66536 78.1375 3.51562 78.2808C3.43099 78.3719 3.36914 78.4663 3.33008 78.564L0.214844 87.9194C0.175781 88.0171 0.15625 88.118 0.15625 88.2222C0.15625 88.437 0.23112 88.6226 0.380859 88.7788C0.537109 88.9285 0.722656 89.0034 0.9375 89.0034C1.15234 89.0034 1.33789 88.9285 1.49414 88.7788C1.55924 88.7072 1.61133 88.6323 1.65039 88.5542L4.0625 81.3179L6.42578 88.4175C6.47135 88.5542 6.54297 88.6746 6.64062 88.7788ZM32.25 79.6187C31.1693 79.6187 30.248 79.9995 29.4863 80.7612C28.7246 81.5229 28.3438 82.4442 28.3438 83.5249C28.3438 84.6056 28.7246 85.5269 29.4863 86.2886C30.248 87.0503 31.1693 87.4312 32.25 87.4312C33.3307 87.4312 34.252 87.0503 35.0137 86.2886C35.7754 85.5269 36.1562 84.6056 36.1562 83.5249C36.1562 82.4442 35.7754 81.5229 35.0137 80.7612C34.252 79.9995 33.3307 79.6187 32.25 79.6187ZM36.1562 87.353C35.0625 88.4468 33.7604 88.9937 32.25 88.9937C30.7396 88.9937 29.4505 88.4598 28.3828 87.3921C27.3151 86.3244 26.7812 85.0353 26.7812 83.5249C26.7812 82.0145 27.3151 80.7254 28.3828 79.6577C29.4505 78.59 30.7396 78.0562 32.25 78.0562C33.7604 78.0562 35.0495 78.59 36.1172 79.6577C37.1849 80.7254 37.7188 82.0145 37.7188 83.5249V88.2124C37.7188 88.4272 37.6406 88.6128 37.4844 88.769C37.3346 88.9188 37.1523 88.9937 36.9375 88.9937C36.7227 88.9937 36.5371 88.9188 36.3809 88.769C36.2311 88.6128 36.1562 88.4272 36.1562 88.2124V87.353ZM51.8438 84.3062V88.2124C51.8438 88.4272 51.7656 88.6128 51.6094 88.769C51.4596 88.9188 51.2773 88.9937 51.0625 88.9937C50.8477 88.9937 50.6621 88.9188 50.5059 88.769C50.3561 88.6128 50.2812 88.4272 50.2812 88.2124V78.8374C50.2812 78.6226 50.3561 78.4403 50.5059 78.2905C50.6621 78.1343 50.8477 78.0562 51.0625 78.0562C51.2773 78.0562 51.4596 78.1343 51.6094 78.2905C51.7656 78.4403 51.8438 78.6226 51.8438 78.8374V82.7437H57.7031V78.8374C57.7031 78.6226 57.778 78.4403 57.9277 78.2905C58.084 78.1343 58.2695 78.0562 58.4844 78.0562C58.6992 78.0562 58.8815 78.1343 59.0312 78.2905C59.1875 78.4403 59.2656 78.6226 59.2656 78.8374V88.2124C59.2656 88.4272 59.1875 88.6128 59.0312 88.769C58.8815 88.9188 58.6992 88.9937 58.4844 88.9937C58.2695 88.9937 58.084 88.9188 57.9277 88.769C57.778 88.6128 57.7031 88.4272 57.7031 88.2124V84.3062H51.8438ZM76.9062 87.4312C77.3359 87.4312 77.7038 87.2782 78.0098 86.9722C78.3158 86.6662 78.4688 86.2983 78.4688 85.8687C78.4688 85.439 78.3158 85.0711 78.0098 84.7651C77.7038 84.4591 77.3359 84.3062 76.9062 84.3062H73.3906V87.4312H76.9062ZM73.3906 78.8374V82.7437H76.9062C77.7721 82.7437 78.5078 83.0496 79.1133 83.6616C79.7253 84.2671 80.0312 85.0028 80.0312 85.8687C80.0312 86.7345 79.7253 87.4735 79.1133 88.0854C78.5078 88.6909 77.7721 88.9937 76.9062 88.9937H72.6094C72.3945 88.9937 72.209 88.9188 72.0527 88.769C71.903 88.6128 71.8281 88.4272 71.8281 88.2124V78.8179C71.8346 78.6095 71.9128 78.4305 72.0625 78.2808C72.2122 78.131 72.3945 78.0562 72.6094 78.0562C72.8242 78.0562 73.0065 78.1343 73.1562 78.2905C73.3125 78.4403 73.3906 78.6226 73.3906 78.8374ZM99.2344 82.7437V79.6187H96.1094C95.6797 79.6187 95.3118 79.7716 95.0059 80.0776C94.6999 80.3836 94.5469 80.7515 94.5469 81.1812C94.5469 81.6108 94.6999 81.9787 95.0059 82.2847C95.3118 82.5907 95.6797 82.7437 96.1094 82.7437H99.2344ZM100.016 78.0562C100.23 78.0562 100.413 78.1343 100.562 78.2905C100.719 78.4403 100.797 78.6226 100.797 78.8374V88.2124C100.797 88.4272 100.719 88.6128 100.562 88.769C100.413 88.9188 100.23 88.9937 100.016 88.9937C99.8008 88.9937 99.6152 88.9188 99.459 88.769C99.3092 88.6128 99.2344 88.4272 99.2344 88.2124V84.3062H96.8906C96.4609 84.3062 96.0931 84.4591 95.7871 84.7651C95.6634 84.8888 95.5658 85.0223 95.4941 85.1655L93.707 88.5054C93.668 88.603 93.6126 88.6877 93.541 88.7593C93.3848 88.9155 93.1992 88.9937 92.9844 88.9937C92.7695 88.9937 92.584 88.9188 92.4277 88.769C92.278 88.6128 92.2031 88.4272 92.2031 88.2124C92.2031 88.0496 92.2454 87.9064 92.3301 87.7827L94.1074 84.4233C94.2116 84.228 94.3385 84.0425 94.4883 83.8667C94.2799 83.7365 94.0846 83.577 93.9023 83.3882C93.2904 82.7827 92.9844 82.047 92.9844 81.1812C92.9844 80.3153 93.2871 79.5796 93.8926 78.9741C94.5046 78.3621 95.2435 78.0562 96.1094 78.0562H100.016ZM114.922 84.3062V88.2124C114.922 88.4272 114.844 88.6128 114.688 88.769C114.538 88.9188 114.355 88.9937 114.141 88.9937C113.926 88.9937 113.74 88.9188 113.584 88.769C113.434 88.6128 113.359 88.4272 113.359 88.2124V78.8374C113.359 78.6226 113.434 78.4403 113.584 78.2905C113.74 78.1343 113.926 78.0562 114.141 78.0562C114.355 78.0562 114.538 78.1343 114.688 78.2905C114.844 78.4403 114.922 78.6226 114.922 78.8374V82.7437H120.781V78.8374C120.781 78.6226 120.856 78.4403 121.006 78.2905C121.162 78.1343 121.348 78.0562 121.562 78.0562C121.777 78.0562 121.96 78.1343 122.109 78.2905C122.266 78.4403 122.344 78.6226 122.344 78.8374V88.2124C122.344 88.4272 122.266 88.6128 122.109 88.769C121.96 88.9188 121.777 88.9937 121.562 88.9937C121.348 88.9937 121.162 88.9188 121.006 88.769C120.856 88.6128 120.781 88.4272 120.781 88.2124V84.3062H114.922ZM140.375 79.6187C139.294 79.6187 138.373 79.9995 137.611 80.7612C136.85 81.5229 136.469 82.4442 136.469 83.5249C136.469 84.6056 136.85 85.5269 137.611 86.2886C138.373 87.0503 139.294 87.4312 140.375 87.4312C141.456 87.4312 142.377 87.0503 143.139 86.2886C143.9 85.5269 144.281 84.6056 144.281 83.5249C144.281 82.4442 143.9 81.5229 143.139 80.7612C142.377 79.9995 141.456 79.6187 140.375 79.6187ZM144.281 87.353C143.188 88.4468 141.885 88.9937 140.375 88.9937C138.865 88.9937 137.576 88.4598 136.508 87.3921C135.44 86.3244 134.906 85.0353 134.906 83.5249C134.906 82.0145 135.44 80.7254 136.508 79.6577C137.576 78.59 138.865 78.0562 140.375 78.0562C141.885 78.0562 143.174 78.59 144.242 79.6577C145.31 80.7254 145.844 82.0145 145.844 83.5249V88.2124C145.844 88.4272 145.766 88.6128 145.609 88.769C145.46 88.9188 145.277 88.9937 145.062 88.9937C144.848 88.9937 144.662 88.9188 144.506 88.769C144.356 88.6128 144.281 88.4272 144.281 88.2124V87.353Z"
                    fill="white"/>
                <Path
                    d="M73.501 63.9936C68.8531 63.9936 64.3097 62.6154 60.4451 60.0332C56.5806 57.451 53.5685 53.7807 51.7898 49.4867C50.0112 45.1926 49.5458 40.4676 50.4525 35.909C51.3593 31.3505 53.5975 27.1631 56.884 23.8766C60.1705 20.5901 64.3578 18.352 68.9164 17.4452C73.475 16.5385 78.2 17.0038 82.4941 18.7825C86.7881 20.5612 90.4583 23.5731 93.0405 27.4377C95.6228 31.3023 97.001 35.8458 97.001 40.4936C97.001 46.7262 94.5251 52.7036 90.118 57.1107C85.7109 61.5178 79.7336 63.9936 73.501 63.9936ZM73.501 18.4739C69.1459 18.4739 64.8887 19.7654 61.2675 22.1849C57.6464 24.6045 54.8241 28.0435 53.1575 32.067C51.4909 36.0906 51.0548 40.5181 51.9044 44.7895C52.7541 49.0609 54.8512 52.9844 57.9307 56.0639C61.0102 59.1434 64.9338 61.2406 69.2052 62.0902C73.4766 62.9398 77.904 62.5038 81.9276 60.8372C85.9511 59.1706 89.3901 56.3482 91.8097 52.7271C94.2292 49.106 95.5207 44.8487 95.5207 40.4936C95.5207 34.6536 93.2008 29.0529 89.0713 24.9234C84.9418 20.7939 79.341 18.4739 73.501 18.4739ZM82.5572 49.9306C81.6516 49.9306 81.817 48.9943 81.817 48.8204V33.6564C81.3763 34.0713 75.1634 38.0301 74.7937 38.4645C75.7015 39.211 76.6422 40.3019 76.6422 41.793C76.6422 43.4691 75.5949 45.4915 73.6849 45.4915V44.3813C74.9887 44.3813 75.5331 42.821 75.5331 41.7907C75.5331 40.7604 74.8388 39.6343 73.6849 38.832V37.3517C73.6849 37.3517 80.366 32.5873 81.4473 31.8038C82.5287 31.0204 83.2955 30.5937 83.2955 31.8038V48.8204C83.2962 49.2175 83.4628 49.9306 82.5568 49.9306H82.5572ZM70.7254 41.7889C70.7254 40.2964 71.6669 39.205 72.5758 38.4582C72.2057 38.023 65.9851 34.0624 65.5443 33.6472V48.8204C65.5443 48.994 65.7112 49.9306 64.8042 49.9306C63.8971 49.9306 64.064 49.2171 64.064 48.8204V31.7968C64.064 30.5859 64.8319 31.013 65.9144 31.7968C66.9969 32.5806 73.686 37.348 73.686 37.348V38.8283C72.5307 39.631 71.8356 40.7597 71.8356 41.7889C71.8356 42.8181 72.3804 44.3795 73.686 44.3795V45.4897C71.7735 45.4897 70.7254 43.4657 70.7254 41.7889Z"
                    fill="white"/>
                <Path opacity="0.2"
                      d="M37.2052 63.994C37.0579 63.995 36.9144 63.9465 36.7973 63.8563C36.6801 63.766 36.5959 63.639 36.5578 63.4952C36.5198 63.3514 36.53 63.1988 36.587 63.0615C36.644 62.9242 36.7444 62.8098 36.8726 62.7364L42.6454 59.3679C42.7985 59.2788 42.9804 59.2547 43.1511 59.3011C43.3218 59.3475 43.4672 59.4605 43.5554 59.6153C43.6436 59.7701 43.6674 59.9539 43.6215 60.1264C43.5757 60.2989 43.4638 60.4459 43.3107 60.5351L37.5375 63.9036C37.4365 63.9626 37.3219 63.9938 37.2052 63.994ZM108.796 63.9898C108.68 63.9897 108.565 63.9585 108.464 63.8994L102.69 60.5305C102.537 60.4413 102.425 60.2943 102.379 60.1218C102.333 59.9493 102.357 59.7654 102.445 59.6106C102.533 59.4558 102.679 59.3429 102.85 59.2965C103.02 59.2501 103.202 59.2741 103.355 59.3633L109.129 62.7318C109.205 62.776 109.272 62.8349 109.325 62.9051C109.378 62.9753 109.418 63.0555 109.44 63.141C109.463 63.2265 109.468 63.3157 109.457 63.4035C109.445 63.4912 109.417 63.5757 109.373 63.6523C109.314 63.7545 109.23 63.8394 109.129 63.8986C109.028 63.9579 108.913 63.9893 108.796 63.9898ZM36.3012 53.0533C36.138 53.056 35.9794 52.9978 35.8558 52.8899C35.7321 52.7821 35.6521 52.6321 35.6308 52.4684C35.6095 52.3048 35.6486 52.139 35.7404 52.0026C35.8323 51.8661 35.9706 51.7686 36.1291 51.7285L39.3492 50.8569C39.4338 50.834 39.5221 50.8282 39.609 50.8398C39.6958 50.8514 39.7795 50.8802 39.8554 50.9245C39.9313 50.9688 39.9977 51.0278 40.051 51.0981C40.1043 51.1684 40.1434 51.2486 40.1661 51.3341C40.1887 51.4197 40.1944 51.5089 40.183 51.5967C40.1715 51.6845 40.143 51.7691 40.0992 51.8458C40.0553 51.9225 39.997 51.9897 39.9274 52.0435C39.8579 52.0974 39.7785 52.1369 39.6939 52.1598L36.4742 53.0314C36.4177 53.0461 36.3596 53.0533 36.3012 53.0529V53.0533ZM109.705 53.0533C109.647 53.0532 109.589 53.0455 109.533 53.0305L106.313 52.1584C106.155 52.1184 106.016 52.0209 105.924 51.8844C105.832 51.7479 105.793 51.582 105.815 51.4183C105.836 51.2547 105.916 51.1046 106.04 50.9968C106.164 50.889 106.322 50.831 106.486 50.8338C106.544 50.8339 106.602 50.8416 106.659 50.8569L109.877 51.7285C110.036 51.7686 110.174 51.8661 110.266 52.0026C110.358 52.139 110.397 52.3048 110.376 52.4684C110.354 52.6321 110.274 52.7821 110.151 52.8899C110.027 52.9978 109.869 53.056 109.705 53.0533ZM114.334 43.1048H107.664C107.488 43.1048 107.319 43.034 107.194 42.9079C107.069 42.7818 106.999 42.6108 106.999 42.4324V42.4286C106.999 42.2503 107.069 42.0793 107.194 41.9532C107.319 41.827 107.488 41.7561 107.664 41.7561H114.334C114.511 41.7561 114.68 41.827 114.805 41.9532C114.929 42.0793 115 42.2503 115 42.4286V42.4324C114.999 42.6103 114.929 42.7807 114.804 42.9064C114.679 43.032 114.511 43.1026 114.335 43.1028L114.334 43.1048ZM38.3346 43.1048H31.6648C31.4884 43.1048 31.3191 43.034 31.1944 42.9079C31.0696 42.7818 30.9995 42.6108 30.9995 42.4324V42.4286C30.9995 42.2503 31.0696 42.0793 31.1944 41.9532C31.3191 41.827 31.4884 41.7561 31.6648 41.7561H38.3346C38.5111 41.7561 38.6803 41.827 38.805 41.9532C38.9298 42.0793 38.9999 42.2503 38.9999 42.4286V42.4324C38.9994 42.6103 38.9291 42.7807 38.8044 42.9064C38.6798 43.032 38.511 43.1026 38.335 43.1028L38.3346 43.1048ZM106.488 34.047C106.325 34.0492 106.167 33.9909 106.043 33.8831C105.92 33.7753 105.84 33.6255 105.819 33.4622C105.798 33.2989 105.837 33.1333 105.928 32.997C106.02 32.8607 106.157 32.7631 106.316 32.7227L109.535 31.8507C109.706 31.8045 109.888 31.8288 110.041 31.9183C110.195 32.0078 110.306 32.1551 110.352 32.3279C110.398 32.5007 110.374 32.6847 110.285 32.8395C110.197 32.9943 110.051 33.1073 109.88 33.1535L106.661 34.0251C106.604 34.0391 106.546 34.0456 106.488 34.0445L106.488 34.047ZM39.5172 34.047C39.4589 34.047 39.4009 34.0393 39.3446 34.0239L36.1249 33.1522C36.0403 33.1293 35.9609 33.0898 35.8914 33.0359C35.8219 32.982 35.7636 32.9147 35.7197 32.8381C35.6759 32.7614 35.6474 32.6767 35.636 32.5889C35.6245 32.5011 35.6303 32.4119 35.653 32.3264C35.6756 32.2408 35.7147 32.1606 35.7681 32.0904C35.8214 32.0201 35.8879 31.9611 35.9638 31.9168C36.0397 31.8726 36.1234 31.8438 36.2103 31.8322C36.2971 31.8206 36.3854 31.8264 36.4701 31.8493L39.6897 32.7214C39.8482 32.7614 39.9866 32.8591 40.0784 32.9956C40.1703 33.132 40.2094 33.2979 40.188 33.4616C40.1667 33.6253 40.0865 33.7753 39.9628 33.8831C39.8391 33.9909 39.6805 34.0489 39.5172 34.0462V34.047ZM103.019 25.5923C102.872 25.5933 102.729 25.5449 102.611 25.4547C102.494 25.3644 102.41 25.2373 102.372 25.0935C102.334 24.9496 102.344 24.7972 102.401 24.6599C102.458 24.5225 102.558 24.4082 102.687 24.3348L108.46 20.9658C108.613 20.8766 108.795 20.8526 108.966 20.899C109.137 20.9454 109.282 21.0584 109.37 21.2132C109.459 21.368 109.482 21.5518 109.436 21.7243C109.391 21.8968 109.279 22.0438 109.126 22.133L103.352 25.5014C103.251 25.5592 103.137 25.5892 103.021 25.5885L103.019 25.5923ZM42.981 25.588C42.8642 25.588 42.7495 25.5568 42.6483 25.4976L36.8751 22.1287C36.7993 22.0846 36.7328 22.0258 36.6795 21.9557C36.6262 21.8855 36.5871 21.8056 36.5644 21.7202C36.5417 21.6348 36.5359 21.5457 36.5472 21.458C36.5586 21.3703 36.5869 21.2858 36.6306 21.2092C36.6742 21.1326 36.7324 21.0654 36.8018 21.0116C36.8711 20.9577 36.9503 20.9182 37.0348 20.8952C37.1193 20.8723 37.2074 20.8663 37.2942 20.8778C37.3809 20.8892 37.4646 20.9179 37.5404 20.962L43.3132 24.3306C43.4414 24.404 43.5418 24.5183 43.5988 24.6557C43.6557 24.793 43.666 24.9454 43.6279 25.0893C43.5899 25.2331 43.5057 25.3602 43.3885 25.4504C43.2713 25.5407 43.1279 25.5891 42.9806 25.588H42.981ZM97.5146 18.3429C97.3826 18.3434 97.2534 18.3042 97.1435 18.2303C97.0336 18.1564 96.9479 18.051 96.8974 17.9277C96.8468 17.8044 96.8338 17.6687 96.8598 17.5379C96.8858 17.4071 96.9498 17.2869 97.0435 17.1929L99.4004 14.8104C99.5254 14.684 99.695 14.613 99.8718 14.613C100.049 14.6129 100.218 14.6839 100.343 14.8102C100.468 14.9365 100.539 15.108 100.539 15.2867C100.539 15.4654 100.469 15.6368 100.344 15.7632L97.9866 18.1453C97.8612 18.2703 97.692 18.34 97.5159 18.3391L97.5146 18.3429ZM48.4894 18.3404C48.4018 18.3405 48.315 18.323 48.2341 18.2891C48.1532 18.2552 48.0797 18.2055 48.0178 18.1428L45.661 15.7606C45.5991 15.6981 45.55 15.6239 45.5164 15.5422C45.4829 15.4605 45.4657 15.3729 45.4656 15.2844C45.4656 15.196 45.4828 15.1084 45.5163 15.0267C45.5498 14.945 45.5989 14.8707 45.6608 14.8081C45.7226 14.7456 45.796 14.6959 45.8769 14.662C45.9577 14.6282 46.0444 14.6108 46.1319 14.6107C46.2194 14.6107 46.3061 14.6281 46.387 14.6619C46.4678 14.6958 46.5413 14.7454 46.6032 14.8079L48.9605 17.1905C49.0544 17.2844 49.1185 17.4045 49.1446 17.5354C49.1707 17.6664 49.1577 17.8022 49.1071 17.9256C49.0566 18.0489 48.9709 18.1543 48.8608 18.2282C48.7508 18.3022 48.6215 18.3414 48.4894 18.3408V18.3404ZM90.3272 12.7733C90.21 12.7737 90.0948 12.7428 89.9933 12.6838C89.8917 12.6247 89.8073 12.5396 89.7488 12.437C89.6902 12.3344 89.6594 12.2181 89.6597 12.0996C89.6599 11.9812 89.6911 11.8649 89.75 11.7626L93.0836 5.92781C93.1273 5.85121 93.1855 5.78407 93.2549 5.73019C93.3243 5.67632 93.4035 5.63678 93.4879 5.61384C93.5724 5.59089 93.6605 5.58502 93.7473 5.5965C93.834 5.60797 93.9177 5.63658 93.9935 5.68074C94.0693 5.72489 94.1357 5.78373 94.189 5.85384C94.2423 5.92394 94.2814 6.00393 94.3042 6.08932C94.3269 6.17471 94.3327 6.26381 94.3214 6.35148C94.31 6.43915 94.2817 6.52369 94.238 6.6003L90.9047 12.4355C90.8457 12.5371 90.7613 12.6213 90.6601 12.6799C90.5588 12.7384 90.4442 12.7692 90.3276 12.7691L90.3272 12.7733ZM55.6785 12.7637C55.5614 12.7635 55.4465 12.7324 55.345 12.6734C55.2435 12.6144 55.1591 12.5296 55.1001 12.4275L51.7673 6.5923C51.7236 6.51566 51.6953 6.43107 51.6839 6.34337C51.6726 6.25568 51.6785 6.16662 51.7012 6.08121C51.7239 5.9958 51.763 5.91575 51.8163 5.84563C51.8697 5.77551 51.9362 5.71668 52.012 5.67253C52.0878 5.62838 52.1715 5.59975 52.2583 5.58829C52.345 5.57682 52.4332 5.58276 52.5177 5.60573C52.6022 5.6287 52.6814 5.66818 52.7508 5.72209C52.8202 5.77599 52.8783 5.84318 52.922 5.91981L56.2552 11.7546C56.3141 11.8569 56.3453 11.9731 56.3456 12.0915C56.3458 12.2099 56.3151 12.3263 56.2566 12.4289C56.1981 12.5315 56.1138 12.6166 56.0123 12.6757C55.9108 12.7348 55.7956 12.7657 55.6785 12.7653V12.7637ZM81.9725 9.27537C81.8701 9.27575 81.7689 9.25223 81.677 9.20662C81.585 9.16101 81.5047 9.09451 81.4423 9.01239C81.38 8.93027 81.3372 8.83466 81.3174 8.73309C81.2975 8.63152 81.3011 8.52673 81.328 8.42681L82.1904 5.17304C82.2129 5.08743 82.252 5.00715 82.3053 4.93684C82.3586 4.86652 82.4251 4.80757 82.501 4.76333C82.5769 4.71908 82.6608 4.69039 82.7477 4.67898C82.8346 4.66758 82.9229 4.67365 83.0075 4.69684C83.0921 4.71961 83.1714 4.75906 83.2409 4.81289C83.3104 4.86671 83.3687 4.93386 83.4125 5.01051C83.4563 5.08715 83.4847 5.17179 83.496 5.25953C83.5074 5.34728 83.5014 5.43646 83.4786 5.5219L82.6158 8.77567C82.577 8.91798 82.4932 9.04345 82.3771 9.13295C82.2609 9.22245 82.1189 9.27103 81.9729 9.27116L81.9725 9.27537ZM64.0319 9.27075C63.8852 9.27082 63.7425 9.22179 63.6262 9.13141C63.5098 9.04103 63.4263 8.91439 63.3886 8.77106L62.5258 5.51718C62.5029 5.43171 62.497 5.34261 62.5083 5.25482C62.5196 5.16702 62.548 5.08227 62.5918 5.00558C62.6355 4.92889 62.6938 4.86171 62.7634 4.80786C62.8329 4.75401 62.9123 4.71458 62.9969 4.69181C63.0815 4.66869 63.1697 4.66262 63.2566 4.67406C63.3435 4.68549 63.4273 4.71416 63.5031 4.7584C63.579 4.80264 63.6455 4.86163 63.6988 4.93191C63.7521 5.00219 63.7911 5.08245 63.8136 5.16801L64.676 8.42178C64.7217 8.59443 64.6977 8.77836 64.6093 8.93318C64.521 9.08799 64.3756 9.20109 64.2049 9.24767C64.1483 9.26145 64.0901 9.26777 64.0319 9.26655V9.27075ZM72.9916 8.08431C72.8151 8.08431 72.6459 8.01341 72.5212 7.8873C72.3964 7.76119 72.3263 7.59016 72.3263 7.41182V0.673923C72.3263 0.495189 72.3965 0.3238 72.5216 0.197416C72.6466 0.0710321 72.8162 0 72.9931 0C73.1699 0 73.3395 0.0710321 73.4645 0.197416C73.5896 0.3238 73.6598 0.495189 73.6598 0.673923V7.41182C73.658 7.58966 73.5868 7.75958 73.4616 7.88463C73.3365 8.00969 73.1676 8.07981 72.9916 8.07969V8.08431Z"
                      fill="white"/>
            </Svg>
        )
    }
}