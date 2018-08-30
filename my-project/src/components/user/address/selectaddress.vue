<template>
    <div>
        <indexheader title="选择地址"></indexheader>
        <!--搜索框-->
        <form class="wsq-searchBox">
            <img src="./static/img/sousuoicon.png" height="24" width="40"/>
            <input type="text" placeholder="搜素街道/小区">
        </form>
        <!--搜索结束-->
        <!--地图-->

        <section class="wsq-map">
                <div class="wsq-mapImg">
                    <el-amap vid="amap" :plugin="plugin" class="amap-demo" :center="center">
                    </el-amap>
                </div>

            <!--地址-->
            <div class="wsq-preAddress">
                <div class="wsq-firstLine">
                    <div class="wsq-dot"></div>
                    <div><span><b>当前</b></span><span><b>位置</b></span></div>
                </div>

                <div class="wsq-secondLine">
                    <img src="./static/img/dingwei.png">
                    <span>恒大国际绿洲</span>
                </div>
                <p>太原市小店区学府街滨河东路交叉路口</p>
            </div>
            <div class="wsq-fujin">
                <div class="wsq-firstLine">
                    <div class="wsq-dot"></div>
                    <div><span><b>附近</b></span><span><b>位置</b></span></div>
                </div>
            </div>
            <div class="wsq-wrapper">
                <div class="wsq-scroller">
                    <ul>
                        <li>
                            <div class="wsq-dot1"></div><span>恒大国际绿洲</span>
                            <p>太原市小店区学府街滨河东路交叉路口</p>
                        </li>
                        <li>
                            <div class="wsq-dot1"></div><span>恒大国际绿洲</span>
                            <p>太原市小店区学府街滨河东路交叉路口</p>
                        </li>
                        <li>
                            <div class="wsq-dot1"></div><span>恒大国际绿洲</span>
                            <p>太原市小店区学府街滨河东路交叉路口</p>
                        </li>
                        <li>
                            <div class="wsq-dot1"></div><span>恒大国际绿洲</span>
                            <p>太原市小店区学府街滨河东路交叉路口</p>
                        </li>
                        <li>
                            <div class="wsq-dot1"></div><span>恒大国际绿洲</span>
                            <p>太原市小店区学府街滨河东路交叉路口</p>
                        </li>
                        <li>
                            <div class="wsq-dot1"></div><span>恒大国际绿洲</span>
                            <p>太原市小店区学府街滨河东路交叉路口</p>
                        </li>

                    </ul>
                </div>
            </div>
            <!--地址结束-->
        </section>
        <!--地图结束-->
    </div>
</template>

<script>
    import indexheader from '../../generally/indexheader'
    export default {
        name: "selectaddress",
        components:{
            indexheader
        },
        data(){
            const self = this;
            return {
                center: [121.59996, 31.197646],
                lng: 0,
                lat: 0,
                loaded: false,
                plugin: [{
                    rotateEnable:true,
                    mapStyle: 'light',
                    scrollWheel:true,
                    enableHighAccuracy: true,//是否使用高精度定位，默认:true
                    timeout: 100,          //超过10秒后停止定位，默认：无穷大
                    maximumAge: 0,           //定位结果缓存0毫秒，默认：0
                    convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
                    showButton: true,        //显示定位按钮，默认：true
                    buttonPosition: 'RT',    //定位按钮停靠位置，默认：'LB'，左下角
                    showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
                    showCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
                    panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
                    zoomToAccuracy:true,//定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：f
                    extensions:'all',
                    pName: 'Geolocation',
                    events: {
                        init(o) {
                            // o 是高德地图定位插件实例
                            o.getCurrentPosition((status, result) => {
                                if (result && result.position) {
                                    self.lng = result.position.lng;
                                    self.lat = result.position.lat;
                                    self.center = [self.lng, self.lat];
                                    self.loaded = true;
                                    self.$nextTick();
                                }
                            });
                        }
                    }
                }]
            }
        },
        methods:{
            req_post() {
                const that=this;
                const registerUrl="http://restapi.amap.com/v3/batch?key=04cf78dff13da7e8eeb13e9ac827c326";
                const newUserInfo={
                    "ops": [
                        {
                            "url": "/v3/place/around?offset=10&page=1&key=04cf78dff13da7e8eeb13e9ac827c326&location="+that.lng+","+that.lat+"&output=json&radius=100000&types=080000"
                        }
                    ]
                };
                that.axios.post(registerUrl, newUserInfo, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                })
                    .then(function (response) {
                        console.log(response['data'][0]['body']['pois'])
                    })
                    .catch(function (error) {
                        console.log(error);
                    });

            }
        },
        mounted(){
            this.req_post()
        }

    }
</script>

<style scoped>
    @import url("./static/css/Tfour.css");
</style>