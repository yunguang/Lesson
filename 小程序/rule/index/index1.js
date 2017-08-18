<view class="header">
    <view class="header-top">
    <view class="header-title">筛选机器</view>
    <view class="section1 section" bindtap="onCityTap">
    <text wx:if="{{!isChooseCity}}" class="common-words">按城市</text>
    <text wx:if="{{isChooseCity}}" class="common-words">{{areas[value[2]]}}</text>
<image class="choose-image" src="/images/down.png"></image>
    </view>
    <view class="section2 section">
    <picker bindchange="bindTypeChange" value="{{typeIndex}}" range="{{types}}">
    <view class="picker picker1">
    <view class="picker-item">
    <text class="common-words" wx:if="{{!isChooseType}}">按行业</text>
    <text class="common-words" wx:if="{{isChooseType}}">{{types[typeIndex]}}</text>
</view>
<image class="choose-image" src="/images/down.png"></image>
    </view>
    </picker>
    </view>
    <view class="search" bindtap="onSearchTap">
    <image class="search-image" src="/images/search.png"></image>
    </view>
    </view>
    <view class="body-title common-body">
    <text>查找机器数量</text>
    <text>{{lists.length}}（台）</text>
</view>
</view>
<view class="body">
    <view class="body-content common-body">
    <view class="list" data-index="{{index}}" wx:for="{{lists}}" bindtap="onListTap">
    <text class="{{item.checked?'checked':'not-checked'}}">{{item.content}}</text>
<image wx:if="{{item.checked}}" src="/images/checked.png"></image>
    <image wx:else src="/images/not-checked.png"></image>
    </view>
    </view>
    </view>
    <view class="footer">
    <view bindtap="onPublishTap">确认选择</view>
    </view>

    <view class="box" wx:if="{{isShow}}">
    <view class="box-item" bindtap="onBoxTap"></view>
    <view data-show="true" class="title">
    <view class="cancel" bindtap="onCancelTap">取消</view>
    <view class="confirm" bindtap="onConfirmTap">确定</view>
    </view>
    <picker-view data-show="true" indicator-style="height: 50px;" style="width: 100%;" value="{{value}}" bindchange="bindChange">
    <picker-view-column>
    <view wx:for="{{provinces}}">{{item}}</view>
</picker-view-column>
<picker-view-column>
<view wx:for="{{citys}}">{{item}}</view>
</picker-view-column>
<picker-view-column>
<view wx:for="{{areas}}">{{item}}</view>
</picker-view-column>
</picker-view>
<view data-show="true" class="bottom"></view>
    </view>

