<script setup lang='ts'>
import { useColorMode } from '@vueuse/core';
import { Button } from './components/ui/button';

const mode = useColorMode()
</script>

<template>
    <Button>App</Button>
    <Button size="lg" @click="() => mode = mode === 'dark' ? 'light' : 'dark'">切換模式</Button>
</template>
