<template>
    <div>
        <indexheader title="我的特权会员"></indexheader>
        <!--第一行-->
        <div class="middle">
            <div class=" person">
                <div class="left"></div>
                <div class="middle">
                    <span style="font-size: 0.3rem;color: #333;font-weight:bold;" >韩梅梅同学</span><br>
                    <span style="font-size: 0.22rem;color: #33cc9f;font-weight: bold;">·&nbsp;</span>
                    <span style="font-size: 0.22rem;color: #666;font-weight:bold;">累计充值</span>
                    <span style="font-size: 0.24rem;color: #41b2fc;font-weight: bold">&nbsp;&nbsp;1689</span>
                    <span style="font-size: 0.24rem;color: #999;font-weight: bold">&nbsp;.&nbsp;2000</span>
                </div>
                <a href="" class="right">
                    <div class="gb-title" style="font-size: 0.2rem">
                        <span style="color: #41b2fc;font-weight: bold;margin-right: 0.1rem;">升级攻略</span>
                        <div class="dian" style="border-radius: 50%;"></div>
                        <div class="dian" style="color: #3bacfe;opacity: 0.5;border-radius: 50%;" ></div>
                        <div class="dian" style="background: #3bacfe;opacity: 0.3;border-radius: 50%;"></div>
                    </div>
                </a>
                <div class="bottom">
                    <div class="left">
                        <img src="./static/img/yellow.png" alt="" style="width: 0.3rem;height: 0.3rem;margin-right: 0.14rem;margin-top: 0.06rem">
                        <span style="font-size:0.22rem;color:#666;font-weight: bold ">黄金会员</span>
                    </div>
                    <div class="line"></div>
                    <div class="right">
                        <img src="./static/img/gray.png" alt=""
                             style="width: 0.25rem;height: 0.25rem;">
                        <span style="font-size:0.22rem;color: #666;font-weight: bold;margin-left: 0.16rem;">白金会员</span>
                    </div>
                </div>
            </div>
        </div>
        <!--第二行-->
        <div class="content">
            <div class="nxrYuan"></div>
            <span>我的<p>特权</p></span>
        </div>

        <div class="middle">
            <div class="box1">
                <img src="./static/img/changxian.png" alt="" >
                <p>新服务尝鲜</p>
            </div>
            <div class="box">
                <img src="./static/img/zhekou.png" alt="" >
                <p>会员折扣</p>
            </div>
        </div>
        <!--第三行-->
        <div class="content" >
            <div class="left" style="width: auto">
                <div class="nxrYuan"></div>
                <span>下一级<p>特权</p></span>
            </div>
            <div class="right">
                <a href="" class="right">
                    <pre style="font-size: 0.28rem;margin-right: 0.1rem">完整特权</pre>
                    <div class="dian" style="border-radius: 50%;"></div>
                    <div class="dian" style="color: #999;opacity: 0.5;border-radius: 50%;" ></div>
                    <div class="dian" style="background: #999;opacity: 0.3;border-radius: 50%;"></div>
                </a>
            </div>
        </div>

        <div class="middle">
            <div class="box1">
                <img src="./static/img/changxian.png" alt="" >
                <p>新服务尝鲜</p>
            </div>
            <div class="box">
                <img src="./static/img/zhekou.png" alt="" >
                <p>会员折扣</p>
            </div>
            <div class="box2">
                <img src="./static/img/fuwu.png" alt="" >
                <p>会员快递服务</p>
            </div>
        </div>
    </div>
</template>

<script>
    import indexheader from '../../../generally/indexheader'
    export default {
        name: "myvip",
        components:{
            indexheader
        }
    }
</script>

<style scoped>
    /*@import url("./static/css/yhq-iconfont.css");*/
    @import url("./static/css/yhq-myVip.css");
</style>