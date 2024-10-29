<template>
    <UserLayouts>
        <div class="bg-white" style="padding: 50px">
            <div class="box p-5">
                <div class="image">
                    <img v-if="product.product_images.length > 0" :src="`${product.product_images[0].image}`" alt="Apple Watch">
                    <img v-else src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png" alt="Apple Watch">
                </div>

                <div class="mt-4 flex justify-between boxRight">
                    <div>
                        <h3 class="text-lg text-gray-700">
                            <span aria-hidden="true" class="" />
                            {{ product.title }}
                        </h3>
                        <p class="mt-1 text-sm text-gray-500">{{ product.id }}</p>
                        <p class="mt-1 text-sm text-gray-500">{{ product.slug }}</p>
                        <p class="mt-1 text-sm text-gray-500">{{ product.brand.name }}</p>
                        <p class="mt-1 text-sm text-gray-500">{{ product.category.name }}</p>
                    </div>

                    <p class="text-sm font-medium text-gray-900">${{ product.price }}</p>
                </div>
            </div>

            <div class="boxDesc">
                <span style="font-size: 24px">Descrição</span>

                <span>

                    {{ product.description }}
                </span>
            </div>
        </div>
    </UserLayouts>
</template>


<script setup>
import UserLayouts from './Layouts/UserLayouts.vue';
import { ref, watch } from 'vue'
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
    TransitionRoot,
} from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/vue/20/solid'
import Products from './Components/Products.vue'
import SecondaryButtonVue from '@/Components/SecondaryButton.vue';
import { router, useForm } from '@inertiajs/vue3';


const props = defineProps({
    product: Object,
})

</script>


<style>
div.box {
    display: flex;
    gap: 15px;
}

div.image {
    width: 50%;
}

div.boxRight {
    width: 50%;
}

div.boxDesc {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
}
</style>
