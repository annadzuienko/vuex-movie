<template>
    <v-layout column>
        <v-flex align-self-start>
            <v-layout class="mr-2 mt-3 mb-1">
                <router-link to="/top" class="router-link">
                    <div class="link mr-4 subheading light-blue--text text--accent-3">Top Rated</div>
                </router-link>
                <router-link to="/now" class="router-link">
                    <div class="link mr-4 subheading light-blue--text text--accent-3">Now Playing</div>
                </router-link>
                <router-link to="/soon" class="router-link">
                    <div class="link mr-4 subheading light-blue--text text--accent-3">Coming Soon</div>
                </router-link>
            </v-layout>
        </v-flex>
        <v-flex>
            <router-view></router-view>
        </v-flex>
    </v-layout>
</template>

<style>
.router-link {
    text-decoration: none;
}
a.router-link:visited {
    font-weight: bold;
    border-bottom: 2px solid #00B0FF;
}
</style>