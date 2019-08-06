import React, {Component} from 'react'
import Svg, {G, Path} from 'react-native-svg';

export default class SvgHandPhone extends Component {
    static defaultProps = {
        style: {},
    };

    render() {
        return (
            <Svg style={this.props.style} width="119" height="122" viewBox="0 0 119 122" fill="none">
                <G opacity="0.2">
                    <Path
                        d="M13.9339 50.9231L11.4145 40.3428C11.1422 39.1219 11.3464 39.1219 9.91655 39.2576C8.96329 39.3254 8.07811 39.6645 7.32912 40.0715C3.3118 42.5809 5.01406 48.4137 8.48666 50.7197C9.37183 51.2622 9.37183 51.1944 10.3251 51.1266C11.4826 51.0588 12.4359 51.1944 13.253 51.3979C14.2062 51.6014 14.1381 51.8727 13.9339 50.9231ZM65.8867 34.4422C66.6357 34.51 66.6357 35.4595 66.091 35.663C65.6824 35.7986 65.4781 35.4595 66.0229 36.2056C66.6357 37.0194 67.2485 37.6298 67.8613 38.2402C69.7678 40.2071 71.2658 42.174 70.9934 45.0225C70.9254 45.7008 70.7892 46.7181 70.3125 47.8033C69.8359 48.9563 69.0188 50.1093 67.5889 51.1944C66.908 51.6692 66.159 50.6518 66.8399 50.1093C68.0656 49.2276 68.7465 48.2102 69.155 47.2607C69.5636 46.3112 69.7678 45.7686 68.8827 45.7686C67.3166 45.7686 65.8186 45.4295 64.2525 45.3617C63.1631 45.2938 63.4354 45.2938 63.7078 46.379L75.6236 88.7005C76.6449 92.363 76.0321 95.2794 72.0148 96.2967L42.8041 103.825C47.6385 106.335 51.792 107.962 56.8988 109.183C66.2271 111.353 75.8279 110.743 84.4072 112.846C85.9733 113.252 87.6075 113.727 89.3097 114.338C89.9225 114.541 89.7863 114.609 90.1268 114.066C90.5353 113.456 90.9439 112.778 91.4205 111.964C97.072 102.876 103.745 88.904 107.354 78.7984C107.694 77.8489 107.966 76.9672 108.239 76.2211C108.511 75.4072 108.579 75.6107 107.83 75.1359C107.626 75.0003 107.422 74.8646 107.217 74.729C106.673 74.3899 106.196 74.0508 105.719 73.7117C103.472 72.0161 101.634 70.117 99.9999 67.5398C95.0293 59.6045 95.574 50.3806 90.1949 42.4453C87.267 38.1724 83.522 36.2056 80.1175 32.4075C77.7344 29.6945 76.3726 26.7103 73.7171 24.1331C71.6063 22.0984 68.8827 20.8776 66.4314 19.2498C65.0015 18.3003 63.5716 16.9438 62.1417 15.5874C60.4395 13.8918 58.1925 11.1789 55.1284 12.3997C54.1071 12.8066 54.4475 13.4849 54.7199 14.6378L58.2606 27.2529C58.6691 28.745 59.5543 30.305 60.7799 31.5936C62.1417 33.0179 63.844 34.3065 65.8867 34.4422ZM59.8267 32.4075L59.7586 32.3396L62.7545 43.0557C63.095 44.3443 62.8907 44.0052 64.1844 44.1408C65.8186 44.2765 67.3847 44.6156 69.0188 44.5478C69.8359 44.5478 69.7678 44.6156 69.6997 43.7339C69.4955 41.8349 68.2698 40.4784 66.908 39.1219C66.091 38.3081 65.2739 37.4942 64.4568 36.1377C63.9121 35.256 64.1844 35.4595 63.2993 34.9847C61.9375 34.4422 60.7799 33.4926 59.8267 32.4075ZM108.715 72.2196C108.511 72.3552 108.307 72.6265 108.035 72.9656C107.626 73.5082 107.626 73.4404 108.103 73.7795C108.239 73.8473 108.443 73.9829 108.579 74.0508C109.124 74.3899 108.988 74.3221 109.124 73.6438C109.26 73.1691 109.328 72.7621 109.396 72.4908C109.532 71.8804 109.192 71.8804 108.715 72.2196ZM87.4032 115.762C87.3351 116.237 87.3351 116.576 87.3351 116.847C87.3351 117.118 87.4032 117.254 87.5394 117.254C87.7436 117.322 88.2203 116.915 88.9012 116.033C89.3097 115.491 89.3097 115.626 88.6969 115.355C88.4926 115.287 88.2884 115.219 88.0841 115.152C87.4032 115.016 87.4713 115.084 87.4032 115.762ZM8.2143 52.89C5.89923 54.2465 5.69496 58.5871 6.92058 60.7575C7.80575 62.3174 9.5761 63.7417 11.6188 64.6912C13.253 65.5051 15.0914 65.9798 16.8617 66.1155C17.7469 66.1833 17.5427 66.2511 17.4065 65.4372L17.2022 64.4877C16.9298 63.3347 17.1341 63.5382 16.4532 64.0808C15.8404 64.6234 15.0914 64.8268 14.2743 64.8268C13.3891 64.8268 13.4572 63.4704 14.3424 63.5382C15.3638 63.606 16.0447 62.7922 16.4532 61.9105C17.6788 59.3332 17.3384 55.3316 14.9552 53.5004C13.5253 52.5509 9.91655 51.8727 8.2143 52.89ZM18.0193 62.6565L19.3811 68.4893C19.6535 69.6423 19.5173 69.3032 20.2663 70.117C22.1728 72.2196 23.058 75.6785 22.1728 78.4593C21.8323 79.4088 21.8323 78.8662 22.1047 79.9514L22.5132 81.5791C22.6494 82.1895 22.5132 81.9861 23.058 82.1895C23.3984 82.3252 23.6708 82.5286 23.9431 82.7321C25.0326 83.6816 25.373 85.7163 24.624 82.6643L9.98464 22.3018C9.37183 19.6567 10.3251 19.0463 12.7763 18.6394L48.3875 12.1284C51.2473 11.5858 51.3154 12.0606 51.9282 14.1631L71.3339 83.6816C72.0829 86.2589 71.2658 86.8693 68.8827 87.4119L31.6373 96.2967C28.1647 97.1106 27.8924 95.9576 27.2115 93.2447L26.3263 89.6501C25.5092 86.3267 26.0539 87.6154 25.7816 89.6501C25.7135 90.057 25.6454 90.4639 25.5092 90.8709C25.0326 92.363 24.7602 91.6847 25.1688 93.3803L27.2115 101.18C27.8924 103.893 31.5692 105.521 34.7695 104.707L71.8105 95.1437C75.0789 94.3298 75.2831 92.0917 74.466 89.1753C66.7719 61.9105 59.0777 34.7134 51.3835 7.51643C50.8388 5.54957 49.8174 4.73569 47.7066 5.0748L10.8017 11.111C7.53339 11.6536 6.51204 14.2309 7.19294 17.2151L15.4319 51.8048C15.6361 52.8222 15.4999 52.2796 16.2489 53.0256C18.2916 54.9925 18.7002 58.248 18.0874 60.9609C17.815 62.1817 17.7469 61.5035 18.0193 62.6565ZM17.6107 82.3252C18.4959 81.9861 19.5173 81.8504 20.6748 81.8504C21.4238 81.8504 21.3557 81.9861 21.1514 81.3078C20.9472 80.4261 21.0833 80.6296 20.4705 81.0365C20.062 81.3078 19.5854 81.5791 18.9725 81.7148C18.1555 81.9182 17.815 80.6974 18.6321 80.4939C19.6534 80.2227 20.3343 79.5444 20.7429 78.6627C21.9685 76.0855 20.8791 72.3552 18.7683 70.524C18.4278 70.2527 18.0874 70.0492 17.7469 69.8457C14.2743 68.0145 10.257 70.7953 10.3932 75.2038C10.4613 77.9845 11.9593 80.9009 14.5467 81.8504C15.4319 82.1895 16.4532 82.3252 17.6107 82.3252ZM16.7937 93.7873C18.7002 95.2794 21.2876 96.3645 23.7389 96.9071C25.0326 97.1784 24.8964 97.3141 24.624 96.0932L24.1474 94.3298C23.807 92.9734 24.0793 93.2447 23.126 93.7873C22.3771 94.1942 21.56 94.3298 20.7429 94.262C19.9258 94.1264 20.062 92.8377 20.9472 92.9734C21.9685 93.109 22.8537 92.5665 23.5346 91.8882C24.0793 91.2778 24.4198 90.4639 24.5559 89.4466C24.7602 88.0223 24.4198 85.5807 23.6708 84.292C22.5813 82.4608 19.3811 83.0712 17.8831 83.6816C13.6615 85.3094 12.2316 90.1248 16.7937 93.7873ZM39.7401 8.80507C40.0805 8.80507 40.421 9.07636 40.421 9.41547C40.421 9.75459 40.1486 10.0259 39.7401 10.0259C39.3996 10.0259 39.0592 9.75459 39.0592 9.41547C39.0592 9.14418 39.3315 8.80507 39.7401 8.80507ZM37.5612 9.14418C37.9016 9.14418 38.2421 9.41547 38.2421 9.75459C38.2421 10.0937 37.9697 10.365 37.5612 10.365C37.2207 10.365 36.8803 10.0937 36.8803 9.75459C36.9484 9.41547 37.2207 9.14418 37.5612 9.14418ZM48.3875 94.1942L54.1752 92.7699C57.5116 91.956 58.3287 96.568 55.4008 97.3141L49.6131 98.7383C46.3448 99.5522 45.4596 94.9402 48.3875 94.1942ZM54.5837 93.9907L48.728 95.415C47.4342 95.7541 47.7066 97.8566 49.2727 97.4497L55.0603 96.0254C56.4222 95.6863 56.0817 93.6516 54.5837 93.9907ZM25.4411 12.4675C24.624 12.6032 24.3517 11.3145 25.2368 11.1789L34.3609 9.55112C35.178 9.41548 35.4504 10.7041 34.5652 10.8398L25.4411 12.4675Z"
                        fill="#16A0C8"/>
                    <Path
                        d="M34.971 48.217L45.2309 46.0282C45.4366 45.9832 45.6508 45.9922 45.8533 46.0544C46.0558 46.1167 46.2401 46.2301 46.3891 46.3843L42.2171 52.5994C42.0233 52.8841 41.7304 53.082 41.3974 53.153C41.0644 53.224 40.7163 53.163 40.4232 52.9821L34.0603 49.0144C34.1366 48.8152 34.2593 48.6385 34.418 48.4995C34.5767 48.3606 34.7665 48.2636 34.971 48.217ZM35.5152 56.6504C35.5052 56.6036 35.4768 56.5447 35.4635 56.4824L34.0214 49.7229C34.0066 49.6659 33.9994 49.6072 34 49.5484L38.4206 52.3182L35.5152 56.6504ZM47.2251 55.2921L36.9481 57.4845C36.7426 57.5294 36.5289 57.5204 36.3267 57.4583C36.1245 57.3962 35.9404 57.2831 35.7915 57.1294L38.8303 52.6053L40.1508 53.4309C40.5529 53.6802 41.0312 53.7646 41.4886 53.667C41.9459 53.5695 42.3481 53.2972 42.6135 52.9055L43.4821 51.6129L48.1343 54.4962C48.058 54.6952 47.9354 54.8717 47.7769 55.0104C47.6184 55.1492 47.4293 55.2454 47.2251 55.2921ZM46.7294 47.0118L48.1716 53.7719C48.1864 53.8289 48.1936 53.8876 48.193 53.9464L43.7724 51.1765L46.6777 46.8438C46.7016 46.8974 46.719 46.9539 46.7294 47.0118Z"
                        fill="#16A0C8"/>
                    <Path
                        d="M41.0991 62.2369C41.1275 62.3702 41.1267 62.4918 41.0966 62.6018C41.0692 62.7077 41.018 62.8025 40.943 62.8864C40.8714 62.9695 40.7791 63.0392 40.6661 63.0955C40.5573 63.1544 40.4362 63.1981 40.303 63.2265C40.1424 63.2608 39.9683 63.2818 39.7807 63.2897C39.5931 63.2976 39.4212 63.2789 39.2651 63.2336C39.2424 63.2277 39.2242 63.2174 39.2103 63.2025C39.1998 63.1868 39.1985 63.1639 39.2063 63.1337L39.2588 62.9028C39.2633 62.8733 39.2716 62.8536 39.2838 62.8439C39.2994 62.8334 39.3258 62.8314 39.3628 62.8377C39.5133 62.8735 39.6636 62.8914 39.8136 62.8916C39.9664 62.8876 40.1025 62.8728 40.2221 62.8473C40.3861 62.8123 40.509 62.7522 40.5908 62.6669C40.6718 62.5781 40.6993 62.4723 40.673 62.3493C40.6461 62.2229 40.5703 62.1355 40.4456 62.087C40.321 62.0386 40.1503 62 39.9334 61.9713C39.779 61.9507 39.6434 61.926 39.5265 61.8974C39.4131 61.868 39.316 61.8316 39.2353 61.7881C39.1573 61.7404 39.0949 61.6823 39.0481 61.6137C39.0013 61.5451 38.967 61.4596 38.9452 61.3571C38.8992 61.1418 38.9386 60.9495 39.0632 60.7801C39.1904 60.6065 39.4027 60.488 39.6999 60.4246C39.8399 60.3947 39.9774 60.3779 40.1124 60.3741C40.25 60.3661 40.3912 60.3753 40.5361 60.4015C40.5815 60.4133 40.6021 60.4428 40.5979 60.4902L40.5519 60.7518C40.546 60.7745 40.5362 60.7873 40.5226 60.7902C40.5123 60.7924 40.4979 60.7919 40.4794 60.7887C40.3318 60.7666 40.205 60.7579 40.0988 60.7627C39.9961 60.7668 39.8867 60.7812 39.7705 60.806C39.6168 60.8388 39.5076 60.896 39.4428 60.9777C39.3781 61.0593 39.3556 61.1463 39.3753 61.2385C39.3876 61.2966 39.4088 61.3457 39.4388 61.3857C39.4715 61.4216 39.5157 61.4532 39.5716 61.4806C39.6267 61.5046 39.6972 61.5252 39.783 61.5426C39.8689 61.56 39.9709 61.5776 40.0889 61.5952C40.2036 61.6137 40.3152 61.6345 40.4237 61.6578C40.5357 61.6803 40.6362 61.716 40.7252 61.7649C40.8168 61.8096 40.8957 61.8696 40.9618 61.9448C41.0278 62.02 41.0736 62.1174 41.0991 62.2369Z"
                        fill="#16A0C8"/>
                    <Path
                        d="M43.9575 59.5163C44.1659 59.4718 44.3467 59.4654 44.4999 59.497C44.6558 59.5244 44.7902 59.5851 44.903 59.6789C45.0152 59.7692 45.1064 59.8873 45.1768 60.033C45.2506 60.178 45.3072 60.3427 45.3465 60.5272L45.6504 61.9518C45.657 61.9825 45.6545 62.0045 45.6431 62.0176C45.6343 62.0266 45.6162 62.0341 45.5889 62.0399L45.307 62.1C45.2797 62.1059 45.2585 62.1068 45.2434 62.1029C45.2275 62.0956 45.2163 62.0765 45.2097 62.0458L44.9211 60.6929C44.8534 60.3752 44.7474 60.1549 44.6034 60.0321C44.462 59.9051 44.2546 59.8708 43.9813 59.9291C43.9301 59.94 43.8748 59.9571 43.8155 59.9805C43.7589 59.9997 43.7016 60.0245 43.6438 60.0547C43.5852 60.0814 43.5291 60.1113 43.4754 60.1442C43.4251 60.1763 43.3803 60.2091 43.341 60.2425C43.4099 60.3313 43.464 60.4341 43.5032 60.5508C43.545 60.6633 43.5824 60.7964 43.6152 60.9501L43.9081 62.3235C43.9147 62.3542 43.9123 62.3762 43.9008 62.3893C43.8886 62.3991 43.8671 62.4072 43.8363 62.4138L43.5596 62.4728C43.5323 62.4786 43.5111 62.4796 43.4959 62.4757C43.4801 62.4683 43.4689 62.4493 43.4623 62.4186L43.1683 61.0401C43.1384 60.9 43.0998 60.7779 43.0526 60.6737C43.008 60.5653 42.9487 60.4797 42.8746 60.417C42.7998 60.3508 42.7067 60.3081 42.5955 60.289C42.4877 60.2692 42.3535 60.2764 42.1929 60.3106C42.1485 60.3201 42.0809 60.3381 41.9901 60.3646C41.8986 60.3877 41.8137 60.4165 41.7353 60.4511L42.212 62.6853C42.2185 62.7161 42.2161 62.738 42.2046 62.7512C42.1958 62.7602 42.176 62.768 42.1453 62.7745L41.8686 62.8336C41.8413 62.8394 41.8183 62.8407 41.7998 62.8375C41.7839 62.8302 41.7727 62.8112 41.7662 62.7804L41.2906 60.5513C41.2687 60.4488 41.2738 60.3638 41.3059 60.2963C41.3379 60.2287 41.3899 60.1712 41.4619 60.1237C41.5339 60.0762 41.6239 60.0373 41.7317 60.0072C41.8389 59.9736 41.9573 59.943 42.0871 59.9153C42.2955 59.8708 42.4728 59.8562 42.6189 59.8715C42.7685 59.886 42.9085 59.9311 43.0389 60.0069L43.044 60.0058C43.1515 59.89 43.2821 59.7907 43.4359 59.7079C43.5923 59.6209 43.7662 59.5571 43.9575 59.5163Z"
                        fill="#16A0C8"/>
                    <Path
                        d="M48.03 60.7583C48.0584 60.8916 48.0576 61.0132 48.0275 61.1232C48.0001 61.2291 47.9489 61.3239 47.8739 61.4078C47.8023 61.4909 47.7101 61.5606 47.597 61.6168C47.4882 61.6758 47.3671 61.7195 47.2339 61.7479C47.0733 61.7821 46.8992 61.8032 46.7116 61.8111C46.524 61.819 46.3521 61.8003 46.196 61.755C46.1734 61.7491 46.1551 61.7387 46.1412 61.7238C46.1307 61.7082 46.1294 61.6853 46.1372 61.655L46.1898 61.4242C46.1942 61.3947 46.2025 61.375 46.2147 61.3653C46.2303 61.3548 46.2567 61.3527 46.2937 61.3591C46.4442 61.3949 46.5945 61.4128 46.7445 61.413C46.8973 61.409 47.0334 61.3942 47.153 61.3687C47.317 61.3337 47.4399 61.2736 47.5217 61.1882C47.6028 61.0995 47.6302 60.9937 47.6039 60.8707C47.577 60.7443 47.5012 60.6569 47.3766 60.6084C47.2519 60.56 47.0812 60.5214 46.8643 60.4927C46.7099 60.4721 46.5743 60.4474 46.4574 60.4188C46.344 60.3894 46.247 60.353 46.1662 60.3095C46.0882 60.2618 46.0258 60.2037 45.979 60.1351C45.9323 60.0665 45.8979 59.9809 45.8761 59.8785C45.8302 59.6632 45.8695 59.4709 45.9941 59.3015C46.1213 59.1279 46.3336 59.0094 46.6308 58.946C46.7709 58.9161 46.9083 58.8992 47.0433 58.8955C47.1809 58.8875 47.3221 58.8967 47.467 58.9229C47.5124 58.9347 47.533 58.9642 47.5288 59.0115L47.4828 59.2732C47.4769 59.2958 47.4671 59.3087 47.4535 59.3116C47.4432 59.3138 47.4288 59.3133 47.4103 59.3101C47.2627 59.288 47.1359 59.2793 47.0297 59.2841C46.927 59.2882 46.8176 59.3026 46.7014 59.3273C46.5477 59.3601 46.4385 59.4174 46.3737 59.4991C46.309 59.5807 46.2865 59.6677 46.3062 59.7599C46.3186 59.818 46.3397 59.867 46.3697 59.9071C46.4024 59.943 46.4466 59.9746 46.5025 60.002C46.5576 60.0259 46.6281 60.0466 46.7139 60.064C46.7998 60.0814 46.9018 60.099 47.0198 60.1166C47.1345 60.135 47.2461 60.1559 47.3546 60.1791C47.4666 60.2017 47.5671 60.2374 47.6561 60.2863C47.7478 60.331 47.8266 60.391 47.8927 60.4662C47.9587 60.5414 48.0045 60.6388 48.03 60.7583Z"
                        fill="#16A0C8"/>
                </G>
                <Path
                    d="M10.2074 47.2412L7.68806 36.6609C7.4157 35.44 7.61997 35.4401 6.19008 35.5757C5.23682 35.6435 4.35164 35.9826 3.60265 36.3896C-0.41467 38.899 1.28758 44.7318 4.76018 47.0378C5.64536 47.5804 5.64536 47.5125 6.59862 47.4447C7.75615 47.3769 8.70941 47.5125 9.5265 47.716C10.4798 47.9195 10.4117 48.1908 10.2074 47.2412ZM62.1602 30.7603C62.9092 30.8281 62.9092 31.7776 62.3645 31.9811C61.9559 32.1167 61.7517 31.7776 62.2964 32.5237C62.9092 33.3375 63.522 33.9479 64.1348 34.5584C66.0414 36.5252 67.5393 38.4921 67.267 41.3406C67.1989 42.0189 67.0627 43.0362 66.5861 44.1214C66.1094 45.2744 65.2924 46.4274 63.8625 47.5125C63.1816 47.9873 62.4326 46.97 63.1135 46.4274C64.3391 45.5457 65.02 44.5283 65.4285 43.5788C65.8371 42.6293 66.0414 42.0867 65.1562 42.0867C63.5901 42.0867 62.0921 41.7476 60.5261 41.6798C59.4366 41.6119 59.709 41.6119 59.9813 42.6971L71.8971 85.0186C72.9185 88.6811 72.3056 91.5975 68.2883 92.6148L39.0776 100.143C43.912 102.653 48.0655 104.28 53.1723 105.501C62.5007 107.672 72.1014 107.061 80.6807 109.164C82.2468 109.571 83.881 110.045 85.5832 110.656C86.196 110.859 86.0599 110.927 86.4003 110.384C86.8089 109.774 87.2174 109.096 87.694 108.282C93.3455 99.1937 100.018 85.2221 103.627 75.1165C103.968 74.167 104.24 73.2853 104.512 72.5392C104.785 71.7253 104.853 71.9288 104.104 71.454C103.899 71.3184 103.695 71.1828 103.491 71.0471C102.946 70.708 102.47 70.3689 101.993 70.0298C99.746 68.3342 97.9076 66.4351 96.2734 63.8579C91.3028 55.9226 91.8475 46.6987 86.4684 38.7634C83.5405 34.4905 79.7956 32.5237 76.3911 28.7256C74.0079 26.0127 72.6461 23.0284 69.9906 20.4512C67.8798 18.4165 65.1562 17.1957 62.7049 15.5679C61.275 14.6184 59.8451 13.2619 58.4153 11.9055C56.713 10.2099 54.466 7.49698 51.402 8.7178C50.3806 9.12473 50.7211 9.80296 50.9934 10.956L54.5341 23.571C54.9426 25.0631 55.8278 26.6231 57.0535 27.9117C58.4153 29.336 60.1175 30.6246 62.1602 30.7603ZM56.1002 28.7256L56.0321 28.6578L59.0281 39.3738C59.3685 40.6624 59.1642 40.3233 60.458 40.459C62.0921 40.5946 63.6582 40.9337 65.2924 40.8659C66.1094 40.8659 66.0414 40.9337 65.9733 40.052C65.769 38.153 64.5434 36.7965 63.1816 35.4401C62.3645 34.6262 61.5474 33.8123 60.7303 32.4558C60.1856 31.5741 60.458 31.7776 59.5728 31.3028C58.211 30.7603 57.0534 29.8107 56.1002 28.7256ZM108.393 72.8783C107.917 72.607 108.325 71.9288 108.802 72.2001L115.815 76.2695C116.292 76.5408 115.883 77.219 115.407 76.9477L108.393 72.8783ZM82.3149 113.369C82.2468 112.894 82.3149 112.351 82.4511 111.605C82.5873 110.927 82.6554 111.063 81.9745 110.859C81.4978 110.724 81.0212 110.588 80.5446 110.452C71.9652 108.418 62.3645 108.96 53.0361 106.79C47.3846 105.501 42.8226 103.602 37.3754 100.686L31.3834 102.246C27.5023 103.263 23.5531 101.635 22.3275 97.7694C22.1913 97.2268 22.0551 96.6842 21.9189 96.1416C21.4423 94.3104 21.6466 94.9208 19.8081 94.5139C17.1526 93.9035 14.429 92.7505 12.3863 91.1227C9.04987 88.4098 8.0966 83.8657 10.7521 80.8136C11.9777 79.3893 12.3182 79.9997 10.5478 79.3893C7.48379 78.2363 5.71345 74.913 5.57727 71.6575C5.373 66.7064 9.39032 63.1796 13.7481 64.5361C14.4971 64.8074 14.5652 65.0787 14.3609 64.2648C14.2247 63.6544 14.2928 63.7901 13.6119 63.7901C11.5692 63.7222 9.39032 63.1118 7.48379 62.1623C5.03254 61.0771 3.12602 59.5172 2.10467 57.686C0.606683 55.1087 0.810953 50.768 3.12602 48.6655C4.28355 47.6482 4.35164 48.5299 2.92175 47.1734C-0.48276 44.0536 -1.43602 38.0173 2.92175 35.3044C3.80692 34.7618 4.82827 34.4227 5.91772 34.2871C7.27952 34.1514 7.14334 34.5584 6.80289 33.0662L2.24085 13.8723C1.35567 10.0743 2.85366 6.81875 6.87098 6.14052L43.7759 0.104279C46.5676 -0.370482 48.1336 0.782508 48.8826 3.4276L49.8359 6.88658C50.2444 8.37868 49.904 7.90392 50.9934 7.42916C54.466 5.93705 57.2577 8.92127 59.5047 11.0238C60.8665 12.3124 62.2964 13.6689 63.5901 14.5506C66.1775 16.2461 68.8331 17.3991 71.08 19.5695C73.8036 22.2146 75.0974 25.1988 77.5486 27.9117C81.0212 31.7776 84.6981 33.6088 87.694 38.0851C93.2093 46.2239 92.5965 55.38 97.5671 63.2475C98.9289 65.4178 100.495 67.1134 102.402 68.6055C103.014 69.0802 102.81 69.0802 103.287 68.4698C103.763 67.7916 104.24 67.3847 104.58 67.1812C105.466 66.7064 105.942 66.9777 106.623 67.3847L118.675 74.3026C119.424 74.7095 118.743 75.8625 117.994 75.4556L107.508 69.4194C106.419 68.809 106.691 68.7411 106.555 69.8263C106.215 71.7932 105.602 73.6922 104.921 75.5912C101.312 85.7647 94.5031 99.8041 88.8516 108.96C87.2855 111.537 85.8556 113.369 84.7662 114.25L96.1372 120.761C96.8862 121.168 96.2053 122.321 95.4563 121.914L83.4724 114.996C82.8596 114.657 82.4511 114.386 82.3149 113.369ZM104.989 68.5377C104.785 68.6733 104.58 68.9446 104.308 69.2837C103.899 69.8263 103.899 69.7585 104.376 70.0976C104.512 70.1654 104.717 70.3011 104.853 70.3689C105.397 70.708 105.261 70.6402 105.397 69.9619C105.534 69.4872 105.602 69.0802 105.67 68.809C105.806 68.1985 105.466 68.1985 104.989 68.5377ZM83.6767 112.08C83.6086 112.555 83.6086 112.894 83.6086 113.165C83.6086 113.436 83.6767 113.572 83.8129 113.572C84.0172 113.64 84.4938 113.233 85.1747 112.351C85.5832 111.809 85.5832 111.944 84.9704 111.673C84.7662 111.605 84.5619 111.537 84.3576 111.47C83.6767 111.334 83.7448 111.402 83.6767 112.08ZM4.48782 49.2081C2.17276 50.5646 1.96849 54.9052 3.19411 57.0756C4.07928 58.6355 5.84963 60.0598 7.89233 61.0093C9.5265 61.8232 11.3649 62.2979 13.1353 62.4336C14.0204 62.5014 13.8162 62.5692 13.68 61.7554L13.4757 60.8058C13.2034 59.6528 13.4076 59.8563 12.7267 60.3989C12.1139 60.9415 11.3649 61.145 10.5478 61.145C9.66268 61.145 9.73077 59.7885 10.6159 59.8563C11.6373 59.9241 12.3182 59.1103 12.7267 58.2286C13.9524 55.6513 13.6119 51.6497 11.2288 49.8185C9.79886 48.869 6.19008 48.1908 4.48782 49.2081ZM14.2928 58.9746L15.6546 64.8074C15.927 65.9604 15.7908 65.6213 16.5398 66.4352C18.4463 68.5377 19.3315 71.9966 18.4463 74.7774C18.1059 75.7269 18.1059 75.1843 18.3782 76.2695L18.7868 77.8972C18.9229 78.5076 18.7868 78.3042 19.3315 78.5076C19.6719 78.6433 19.9443 78.8467 20.2167 79.0502C21.3061 79.9997 21.6466 82.0344 20.8976 78.9824L6.25817 18.62C5.64536 15.9749 6.59862 15.3644 9.04987 14.9575L44.661 8.4465C47.5208 7.90392 47.5889 8.37868 48.2017 10.4812L67.6074 79.9997C68.3564 82.577 67.5393 83.1874 65.1562 83.73L27.9108 92.6148C24.4382 93.4287 24.1659 92.2757 23.485 89.5628L22.5998 85.9682C21.7827 82.6448 22.3275 83.9335 22.0551 85.9682C21.987 86.3751 21.9189 86.782 21.7827 87.189C21.3061 88.6811 21.0337 88.0029 21.4423 89.6984L23.485 97.4981C24.1659 100.211 27.8428 101.839 31.043 101.025L68.0841 91.4618C71.3524 90.648 71.5567 88.4098 70.7396 85.4934C63.0454 58.2286 55.3512 31.0316 47.657 3.83454C47.1123 1.86768 46.0909 1.0538 43.9801 1.39292L7.07525 7.42916C3.80692 7.97174 2.78557 10.549 3.46647 13.5332L11.7054 48.1229C11.9097 49.1403 11.7735 48.5977 12.5225 49.3438C14.5652 51.3106 14.9737 54.5661 14.3609 57.279C14.0885 58.4999 14.0205 57.8216 14.2928 58.9746ZM13.8843 78.6433C14.7694 78.3042 15.7908 78.1685 16.9483 78.1685C17.6973 78.1685 17.6292 78.3042 17.425 77.6259C17.2207 76.7442 17.3569 76.9477 16.7441 77.3546C16.3355 77.6259 15.8589 77.8972 15.2461 78.0329C14.429 78.2363 14.0885 77.0155 14.9056 76.8121C15.927 76.5408 16.6079 75.8625 17.0164 74.9808C18.242 72.4036 17.1526 68.6733 15.0418 66.8421C14.7014 66.5708 14.3609 66.3673 14.0205 66.1639C10.5479 64.3326 6.53053 67.1134 6.66671 71.5219C6.7348 74.3026 8.23278 77.219 10.8202 78.1685C11.7054 78.5076 12.7267 78.6433 13.8843 78.6433ZM13.0672 90.1054C14.9737 91.5975 17.5611 92.6826 20.0124 93.2252C21.3061 93.4965 21.1699 93.6322 20.8976 92.4113L20.4209 90.648C20.0805 89.2915 20.3528 89.5628 19.3996 90.1054C18.6506 90.5123 17.8335 90.648 17.0164 90.5801C16.1993 90.4445 16.3355 89.1559 17.2207 89.2915C18.242 89.4271 19.1272 88.8846 19.8081 88.2063C20.3528 87.5959 20.6933 86.782 20.8295 85.7647C21.0337 84.3404 20.6933 81.8988 19.9443 80.6102C18.8549 78.7789 15.6546 79.3893 14.1566 79.9997C9.93504 81.6275 8.50515 86.4429 13.0672 90.1054ZM36.0136 5.12318C36.354 5.12318 36.6945 5.39447 36.6945 5.73359C36.6945 6.0727 36.4221 6.34399 36.0136 6.34399C35.6731 6.34399 35.3327 6.0727 35.3327 5.73359C35.3327 5.46229 35.605 5.12318 36.0136 5.12318ZM33.8347 5.46229C34.1751 5.46229 34.5156 5.73359 34.5156 6.0727C34.5156 6.41181 34.2432 6.68311 33.8347 6.68311C33.4942 6.68311 33.1538 6.41181 33.1538 6.0727C33.2219 5.73359 33.4942 5.46229 33.8347 5.46229ZM44.661 90.5123L50.4487 89.088C53.7851 88.2742 54.6022 92.8861 51.6743 93.6322L45.8867 95.0564C42.6183 95.8703 41.7332 91.2584 44.661 90.5123ZM50.8572 90.3088L45.0015 91.7331C43.7078 92.0722 43.9801 94.1747 45.5462 93.7678L51.3339 92.3435C52.6957 92.0044 52.3552 89.9697 50.8572 90.3088ZM21.7146 8.78562C20.8976 8.92126 20.6252 7.63263 21.5104 7.49698L30.6345 5.86923C31.4515 5.73359 31.7239 7.02222 30.8387 7.15787L21.7146 8.78562ZM44.8653 9.66732L9.25414 16.1783C7.55188 16.5174 7.07525 16.4496 7.48379 18.2808L24.7106 89.2237C25.1872 91.0549 25.3234 91.8688 27.5704 91.3262L64.7476 82.4414C66.4499 82.0344 66.7903 82.1023 66.2456 80.3389L46.908 10.8203C46.5676 9.59949 46.4995 9.39603 44.8653 9.66732Z"
                    fill="#074A5D"/>
                <Path
                    d="M41.2067 41.5747L30.9302 43.7671C30.7065 43.8145 30.4946 43.9066 30.3065 44.0382C30.1185 44.1699 29.9581 44.3384 29.8345 44.5342C29.7109 44.73 29.6266 44.9492 29.5863 45.1792C29.5461 45.4092 29.5507 45.6455 29.5999 45.8746L31.0421 52.6347C31.0906 52.8639 31.1829 53.0816 31.3135 53.2751C31.4441 53.4687 31.6105 53.6344 31.8033 53.7627C31.996 53.891 32.2112 53.9794 32.4366 54.0228C32.662 54.0662 32.8931 54.0639 33.1167 54.0158L43.3766 51.827C43.6003 51.7796 43.8123 51.6875 44.0003 51.5559C44.1883 51.4242 44.3487 51.2557 44.4723 51.0599C44.5959 50.8641 44.6802 50.6449 44.7205 50.4149C44.7607 50.1849 44.7561 49.9486 44.7069 49.7195L43.2647 42.9594C43.2193 42.7301 43.1297 42.5119 43.0011 42.3176C42.8725 42.1234 42.7076 41.9569 42.516 41.8279C42.3243 41.699 42.1098 41.6102 41.885 41.5667C41.6602 41.5232 41.4296 41.526 41.2067 41.5747ZM31.0364 44.2649L41.2963 42.0761C41.5021 42.031 41.7162 42.04 41.9187 42.1023C42.1213 42.1645 42.3056 42.278 42.4545 42.4321L38.2826 48.6473C38.0888 48.932 37.7959 49.1298 37.4629 49.2008C37.1299 49.2719 36.7817 49.2108 36.4887 49.03L30.1258 45.0623C30.202 44.863 30.3248 44.6863 30.4835 44.5474C30.6422 44.4084 30.832 44.3115 31.0364 44.2649ZM31.5806 52.6983C31.5706 52.6514 31.5422 52.5926 31.5289 52.5302L30.0869 45.7707C30.0721 45.7137 30.0649 45.655 30.0655 45.5962L34.4861 48.3661L31.5806 52.6983ZM43.2906 51.3399L33.0135 53.5324C32.8081 53.5772 32.5943 53.5682 32.3922 53.5061C32.19 53.444 32.0059 53.3309 31.857 53.1772L34.8958 48.6531L36.2163 49.4787C36.6184 49.728 37.0966 49.8125 37.554 49.7149C38.0114 49.6173 38.4136 49.345 38.6789 48.9534L39.5476 47.6607L44.1998 50.5441C44.1235 50.743 44.0008 50.9195 43.8424 51.0583C43.6839 51.1971 43.4948 51.2932 43.2906 51.3399ZM42.7949 43.0597L44.2371 49.8197C44.2518 49.8767 44.259 49.9354 44.2584 49.9942L39.8378 47.2244L42.7432 42.8916C42.7671 42.9453 42.7845 43.0017 42.7949 43.0597Z"
                    fill="#074A5D"/>
                <Path
                    d="M37.1646 58.2848C37.193 58.418 37.1922 58.5396 37.1621 58.6496C37.1346 58.7555 37.0834 58.8504 37.0085 58.9342C36.9369 59.0173 36.8446 59.087 36.7316 59.1433C36.6227 59.2022 36.5017 59.2459 36.3685 59.2743C36.2079 59.3086 36.0338 59.3297 35.8462 59.3375C35.6586 59.3454 35.4867 59.3267 35.3306 59.2815C35.3079 59.2756 35.2896 59.2652 35.2757 59.2503C35.2653 59.2347 35.2639 59.2117 35.2718 59.1815L35.3243 58.9506C35.3287 58.9211 35.337 58.9015 35.3493 58.8917C35.3649 58.8813 35.3912 58.8792 35.4283 58.8856C35.5788 58.9213 35.7291 58.9393 35.8791 58.9394C36.0318 58.9354 36.168 58.9207 36.2876 58.8951C36.4515 58.8602 36.5744 58.8 36.6562 58.7147C36.7373 58.626 36.7647 58.5201 36.7385 58.3971C36.7115 58.2707 36.6357 58.1833 36.5111 58.1349C36.3865 58.0865 36.2158 58.0479 35.9989 58.0191C35.8445 57.9985 35.7088 57.9739 35.592 57.9452C35.4786 57.9158 35.3815 57.8794 35.3008 57.8359C35.2228 57.7883 35.1604 57.7301 35.1136 57.6615C35.0668 57.5929 35.0325 57.5074 35.0106 57.4049C34.9647 57.1897 35.004 56.9973 35.1286 56.8279C35.2559 56.6543 35.4681 56.5358 35.7653 56.4724C35.9054 56.4425 36.0429 56.4257 36.1778 56.4219C36.3154 56.414 36.4567 56.4231 36.6016 56.4494C36.6469 56.4611 36.6675 56.4907 36.6633 56.538L36.6174 56.7996C36.6115 56.8223 36.6017 56.8351 36.5881 56.838C36.5778 56.8402 36.5634 56.8397 36.5449 56.8365C36.3973 56.8144 36.2704 56.8058 36.1643 56.8105C36.0616 56.8146 35.9521 56.829 35.836 56.8538C35.6823 56.8866 35.573 56.9438 35.5083 57.0255C35.4436 57.1072 35.4211 57.1941 35.4407 57.2864C35.4531 57.3444 35.4743 57.3935 35.5043 57.4335C35.5369 57.4694 35.5812 57.5011 35.637 57.5284C35.6922 57.5524 35.7626 57.5731 35.8485 57.5905C35.9344 57.6079 36.0363 57.6254 36.1544 57.6431C36.269 57.6615 36.3806 57.6823 36.4892 57.7056C36.6011 57.7281 36.7016 57.7639 36.7906 57.8127C36.8823 57.8575 36.9612 57.9174 37.0272 57.9926C37.0933 58.0678 37.1391 58.1652 37.1646 58.2848Z"
                    fill="#074A5D"/>
                <Path
                    d="M40.023 55.5641C40.2314 55.5196 40.4122 55.5132 40.5654 55.5448C40.7213 55.5723 40.8556 55.6329 40.9685 55.7267C41.0807 55.8171 41.1719 55.9351 41.2423 56.0808C41.3161 56.2258 41.3727 56.3905 41.412 56.575L41.7159 57.9996C41.7225 58.0303 41.72 58.0523 41.7085 58.0655C41.6997 58.0745 41.6817 58.0819 41.6544 58.0877L41.3725 58.1479C41.3452 58.1537 41.324 58.1547 41.3088 58.1507C41.293 58.1434 41.2818 58.1244 41.2752 58.0936L40.9866 56.7408C40.9188 56.4231 40.8129 56.2028 40.6688 56.0799C40.5274 55.9529 40.3201 55.9186 40.0468 55.9769C39.9956 55.9878 39.9403 56.005 39.881 56.0284C39.8244 56.0476 39.7671 56.0723 39.7093 56.1025C39.6507 56.1293 39.5946 56.1591 39.5409 56.192C39.4906 56.2242 39.4458 56.2569 39.4065 56.2903C39.4754 56.3792 39.5295 56.4819 39.5687 56.5986C39.6105 56.7111 39.6479 56.8442 39.6806 56.998L39.9736 58.3713C39.9802 58.402 39.9777 58.424 39.9663 58.4372C39.954 58.4469 39.9326 58.4551 39.9018 58.4616L39.6251 58.5207C39.5978 58.5265 39.5765 58.5274 39.5614 58.5235C39.5456 58.5162 39.5344 58.4971 39.5278 58.4664L39.2337 57.0879C39.2039 56.9479 39.1653 56.8257 39.1181 56.7215C39.0735 56.6132 39.0142 56.5276 38.9401 56.4648C38.8652 56.3986 38.7722 56.356 38.661 56.3368C38.5531 56.317 38.419 56.3242 38.2584 56.3584C38.214 56.3679 38.1464 56.3859 38.0556 56.4124C37.9641 56.4355 37.8792 56.4643 37.8008 56.4989L38.2775 58.7331C38.284 58.7639 38.2816 58.7858 38.2701 58.799C38.2613 58.808 38.2415 58.8158 38.2108 58.8224L37.9341 58.8814C37.9067 58.8872 37.8838 58.8886 37.8653 58.8854C37.8494 58.878 37.8382 58.859 37.8316 58.8283L37.3561 56.5992C37.3342 56.4967 37.3393 56.4116 37.3713 56.3441C37.4034 56.2765 37.4554 56.219 37.5274 56.1715C37.5994 56.124 37.6893 56.0852 37.7972 56.055C37.9043 56.0214 38.0228 55.9908 38.1526 55.9631C38.361 55.9187 38.5383 55.9041 38.6844 55.9193C38.8339 55.9338 38.9739 55.979 39.1044 56.0547L39.1095 56.0536C39.217 55.9379 39.3476 55.8386 39.5014 55.7557C39.6578 55.6688 39.8317 55.6049 40.023 55.5641Z"
                    fill="#074A5D"/>
                <Path
                    d="M44.0955 56.8062C44.1239 56.9394 44.1231 57.061 44.093 57.171C44.0656 57.2769 44.0144 57.3717 43.9394 57.4556C43.8678 57.5387 43.7755 57.6084 43.6625 57.6647C43.5537 57.7236 43.4326 57.7673 43.2994 57.7957C43.1388 57.83 42.9647 57.8511 42.7771 57.8589C42.5895 57.8668 42.4176 57.8481 42.2615 57.8028C42.2388 57.797 42.2205 57.7866 42.2067 57.7717C42.1962 57.7561 42.1949 57.7331 42.2027 57.7029L42.2552 57.472C42.2597 57.4425 42.268 57.4229 42.2802 57.4131C42.2958 57.4026 42.3221 57.4006 42.3592 57.407C42.5097 57.4427 42.66 57.4607 42.81 57.4608C42.9628 57.4568 43.0989 57.442 43.2185 57.4165C43.3825 57.3815 43.5054 57.3214 43.5872 57.2361C43.6682 57.1473 43.6957 57.0415 43.6694 56.9185C43.6425 56.7921 43.5667 56.7047 43.442 56.6563C43.3174 56.6079 43.1467 56.5693 42.9298 56.5405C42.7754 56.5199 42.6398 56.4953 42.5229 56.4666C42.4095 56.4372 42.3124 56.4008 42.2317 56.3573C42.1537 56.3096 42.0913 56.2515 42.0445 56.1829C41.9977 56.1143 41.9634 56.0288 41.9415 55.9263C41.8956 55.7111 41.935 55.5187 42.0595 55.3493C42.1868 55.1757 42.3991 55.0572 42.6963 54.9938C42.8363 54.9639 42.9738 54.9471 43.1087 54.9433C43.2463 54.9354 43.3876 54.9445 43.5325 54.9708C43.5779 54.9825 43.5984 55.0121 43.5943 55.0594L43.5483 55.321C43.5424 55.3437 43.5326 55.3565 43.519 55.3594C43.5087 55.3616 43.4943 55.3611 43.4758 55.3579C43.3282 55.3358 43.2013 55.3271 43.0952 55.3319C42.9925 55.336 42.8831 55.3504 42.7669 55.3752C42.6132 55.408 42.504 55.4652 42.4392 55.5469C42.3745 55.6286 42.352 55.7155 42.3717 55.8077C42.384 55.8658 42.4052 55.9149 42.4352 55.9549C42.4679 55.9908 42.5121 56.0224 42.568 56.0498C42.6231 56.0738 42.6936 56.0945 42.7794 56.1119C42.8653 56.1293 42.9672 56.1468 43.0853 56.1645C43.2 56.1829 43.3116 56.2037 43.4201 56.227C43.5321 56.2495 43.6325 56.2852 43.7216 56.3341C43.8132 56.3789 43.8921 56.4388 43.9582 56.514C44.0242 56.5892 44.07 56.6866 44.0955 56.8062Z"
                    fill="#074A5D"/>
            </Svg>
        )
    }
}