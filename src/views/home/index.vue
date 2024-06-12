<template>
    <div class="root-page">
        <!-- {{ state.pageName }}  <el-input-number v-model="total" :min="1" :max="100" @change="handleChange" /> -->
        <div>
            <div class="title">
                    数据统计
                </div>
            <ul class="count-ul">
                <li v-for="(item, index) in countList" :key="index + 'count'" :style="{'background-color': item.bgcolor}">
                    <span class="count">{{ item.count }}</span>
                    <span class="name">{{ item.name }}</span>
                </li>
            </ul>
        </div>
        <div class="content-list">
            <div class="left-upcoming list-content">
                <div class="title">
                    待办事项
                </div>
                <ul>
                    <li v-for="(item, index) in upcomingList" :key="index + 'left'">
                        <span>{{ item.content }}</span>
                        <span>{{ item.date }}</span>
                    </li>
                </ul>
            </div>
            <div class="right-announcement list-content">
                <div class="title">
                    公告通知
                </div>
                <ul>
                    <li v-for="(item, index) in announcementList" :key="index + 'right'">
                        <span>{{ item.content }}</span>
                        <span>{{ item.date }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { announcementList, upcomingList, countList } from './data.js'
export default {
    data() {
        return {
            bookinfolist: [],
            countList,
            announcementList,
            upcomingList
        }
    },
    created() {
        
    },
    methods: {
        
    },
};
</script>

<style scoped lang="scss">
.root-page {
    .title{
        font-size: 18px;
        font-weight: bold;
        color: black;
        margin: 10px 0;
        text-indent: 10px;
        border-left: 5px solid #579bfc;
    }
    .count-ul{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 0;
        li{
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 24%;
            height: 120px;
            margin: 10px 0;
            border-radius: 10px;
            color: white;
            text-align: center;
            .count{
                padding-top: 30px;
                font-size: 30px;
            }
        }
    }
    .content-list{
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
        .list-content{
            width: 48%;
            ul{
                padding: 0;
            }
            
            li{
                display: flex;
                justify-content: space-between;
                padding: 0 14px;
                line-height: 40px;
                font-size: 14px;
                cursor: pointer;
                &:hover{
                    color: #579BFC;
                    background-color: #dadcdf;
                    border-radius: 6px;
                }
            }
        }
    }
}
</style>