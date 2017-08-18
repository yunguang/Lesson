page {
    background: #f5f5f5;
}

.header {
    position: fixed;
    top: 0;
    z-index: 2;
}

.header-top {
    display: flex;
    width: 100%;
    height: 100rpx;
    border-bottom: 1px solid #e7e7e7;
    background: white;
}

.header-top>view {
    display: flex;
    align-items: center;
    justify-content: center;
}

.header-title {
    width: 187rpx;
    font-size: 30rpx;
    border-right: 1px solid #ccc;
}

.section {
    width: 216rpx;
    border-right: 1px solid #ccc;
}

.search {
    width: 132rpx;
}

picker, .picker1 {
    height: 100rpx !important;
}

.picker1 {
    display: flex;
    align-items: center;
    justify-content: center;
}

.common-words {
    white-space: nowrap;
    font-size: 24rpx;
    margin-right: 30rpx;
}

.choose-image {
    width: 25rpx;
    height: 16rpx;
}

.search-image {
    height: 40rpx;
    width: 40rpx;
}

/*body*/

.body {
    position: absolute;
    top: 194rpx;
    width: 100%;
    padding-bottom: 148rpx;
}

.body-title, .list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e7e7e7;
    padding: 0 30rpx;
}

.body-title {
    height: 90rpx;
    background: white;
}

.checked {
    color: #d50b21;
}

.not-checked {
    color: #999;
}

.list {
    height: 84rpx;
}

.list image {
    height: 24rpx;
    width: 24rpx;
}

/*footer*/

.footer {
    background: #f5f5f5;
    position: fixed;
    bottom: 0;
    width: 100%;
}

.footer>view {
    background-color: #d50b21;
    width: 690rpx;
    height: 88rpx;
    line-height: 88rpx;
    text-align: center;
    color: white;
    border-radius: 10rpx;
    margin: 30rpx;
}

/*
 * 省市区 - 收货地址
 */

.box {
    height: 100%;
    width: 100%;
    z-index: 5;
    position: fixed;
}

.box-item {
    height: 100%;
    width: 100%;
    background: #000;
    opacity: 0.5;
}

.title {
    height: 150rpx;
    line-height: 100rpx;
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 450rpx;
    background: white;
}

.cancel, .confirm {
    height: 100%;
}

.cancel {
    margin-left: 30rpx;
    color:#828282;
}

.confirm {
    margin-right: 30rpx;
    color: #1da92f;
}

picker-view {
    height: 300rpx;
    position: absolute;
    bottom: 150rpx;
    background: white;
}

.bottom {
    height: 150rpx;
    width: 100%;
    position: absolute;
    bottom: 0;
    background: white;
}

picker-view view {
    line-height: 50px;
    padding-left: 10px;
    text-align: center;
}
