<template>
    <div class="social">
        <sto-header>

        </sto-header>
        <div class="allcontent">
            <div class="social-cnt">
                <div class="titleLink">
                    <ul>
                        <li class="active">新提案</li>
                        <li>已处理</li>
                    </ul>
                </div>
                <div class="msgbox">
                    <div>
                        <div class="avatar">
                            <span class="digital">
                                6648
                            </span>
                        </div>
                        <div class="msg-desc">
                            <p class="sTitle">
                                下载APP安装失败。。
                            </p>
                            <div class="sCntdesc">
                            <span>
                                小米安卓7.0的手机下载了APP后，安装失败。小米安卓7.0的手机下载了APP后，安装失败。小米安卓7.0的手机下载了APP后，安装失败。小米安卓7.0的手机下载了APP后，安装失败。
                            </span>
                            </div>
                            <div class="resolve" style="display: none">
                                <resolve></resolve>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="msgbox">
                    <div>
                        <div class="avatar">
                             <span class="digital">
                                6648
                            </span>
                        </div>
                        <div class="msg-desc">
                            <p class="sTitle">
                                下载APP安装失败。。
                            </p>
                            <div class="sCntdesc">
                            <span>
                                小米安卓7.0的手机下载了APP后，安装失败。小米安卓7.0的手机下载了APP后，安装失败。小米安卓7.0的手机下载了APP后，安装失败。小米安卓7.0的手机下载了APP后，安装失败。
                            </span>
                            </div>
                            <div class="resolve" style="display: block">
                                <resolve></resolve>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="msgbox">
                    <div>
                        <div class="avatar">
                          <span class="digital">
                                6648
                            </span>
                        </div>
                        <div class="msg-desc">
                            <p class="sTitle">
                                下载APP安装失败。。
                            </p>
                            <div class="sCntdesc">
                            <span>
                                小米安卓7.0的手机下载了APP后，安装失败。小米安卓7.0的手机下载了APP后，安装失败。小米安卓7.0的手机下载了APP后，安装失败。小米安卓7.0的手机下载了APP后，安装失败。
                            </span>
                            </div>
                            <div class="resolve" style="display: none">
                                <resolve></resolve>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="msgbox">
                    <div>
                        <div class="avatar">
                              <span class="digital">
                                6648
                            </span>
                        </div>
                        <div class="msg-desc">
                            <p class="sTitle">
                                下载APP安装失败。。
                            </p>
                            <div class="sCntdesc">
                            <span>
                                小米安卓7.0的手机下载了APP后，安装失败。小米安卓7.0的手机下载了APP后，安装失败。小米安卓7.0的手机下载了APP后，安装失败。小米安卓7.0的手机下载了APP后，安装失败。
                            </span>
                            </div>
                            <div class="resolve" style="display: block">
                                <resolve></resolve>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <commit-cpn></commit-cpn>
            <commit-cpn></commit-cpn>
        </div>
    </div>
</template>

<script>
    import stoHeader from "components/common/stoHeader";
    import commitCpn from "./commitCpn";
    import resolve from "./resolve";
    export default {
    name: "sotSocial",
    components:{
      stoHeader,
      commitCpn,
      resolve
    }
  }
</script>

<style scoped lang="less">
    .active {
        border-bottom: 4px solid #191d6b;
    }
    .allcontent {
        font-family: "PingFang SC", Helvetica, Arial, sans-serif!important;
        float: right;
        display: flex;
        margin-top: 40px;
        margin-right: .02%;

    }
    .social-cnt {
        font-family: PingFang SC, PingFang SC-Bold;
        padding: 0 30px 0 30px;
        box-sizing: border-box;
        font-size: 18px;
        width: 800px;
        height: 800px;
        margin-right: 40px;
        opacity: 1;
        background: #ffffff;
        border-radius: 10px;
        box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.06);
        .titleLink {
            font-family: PingFang SC, PingFang SC-Bold;
            height: 52px;
            padding: 0 30px;
            font-size: 14px;
            box-sizing: border-box;
            border-bottom: 1px solid #efefef;
            ul li {
                float: left;
                padding: 18px 20px 14px 20px;
            }
        }
        .msgbox {
            border-bottom: 1px solid #efefef;
            .avatar {
                float: left;
                width: 48px;
                height: 100px;
                margin: 0 30px;

                .digital {
                    display: inline-block;
                    width: 48px;
                    height: 48px;
                    line-height: 48px;
                    text-align: center;
                    color: #8B93A7;
                    font-size: 13px;
                    border: 1px solid rgba(139,147,167,0.30);
                    border-radius: 11px;
                }
            }
            .msg-desc {

                display: flex;
                flex-direction: column;
                .resolve {
                    margin-top: 20px;

                }

            }
            width: 100%;
            opacity: 1;
            padding-top: 30px;
            padding-bottom: 35px;
            box-sizing: border-box;
            .sTitle{
                font-family: PingFang SC, PingFang SC-Bold;
                font-size: 16px;
                margin-bottom: 8px;
                font-weight: 800;
            }

            .sCntdesc span {
                font-family: PingFang SC, PingFang SC-Bold;
                font-size: 13px;
                color: #8b93a7;
            }

        }

    }

</style>