<template>
    <div class="flex justify-center items-center h-full">
        <div class="container p-16 mx-auto space-y-8">
            <!-- <header class="bg-blue-500 text-white p-8 rounded-lg shadow-lg flex justify-between items-center">
                <h1 class="font-light text-3xl">{{name}}</h1>
            </header> -->
            <!-- <div class="file-upload">
                <form class="">
                    <label class="flex flex-col justify-center items-center h-64 text-gray-600 bg-white border-4 border-dashed border-gray-400 p-4 text-center text-xl transition-all duration-200 cursor-pointer hover:bg-gray-200 hover:text-black">
                        <svg class="w-24 h-24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <span class="font-bold uppercase tracking-wider text-xs pt-2">Upload File</span>
                        <input type="file" class="hidden">
                    </label>
                </form>
            </div> -->
            <div class="panel border bg-white border-gray-300 rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto">
                <header class="panel-header p-8 border-b">
                    <h2 class="text-3xl">Deck Uploader</h2>
                    <p class="text-sm mt-1 text-gray-600">Panel description goes here.</p>
                </header>
                <div class="panel-interior">
                    <dl>
                        <div class="p-8 grid grid-cols-4 items-center bg-gray-100 text-sm">
                            <dt class="font-bold text-gray-600">Upload Deck</dt>
                            <dd class="col-span-3">
                                <label class="block cursor-pointer w-1/2 text-center px-6 py-4 rounded-md bg-gray-400 hover:text-white hover:bg-blue-800 hover:shadow-md transition duration-200">
                                    Choose Files
                                    <input type="file" class="">
                                </label>
                            </dd>
                        </div>
                        <div class="p-8 grid grid-cols-4 items-center border-t">
                            <dt class="text-sm font-bold text-gray-600">Total Cards</dt>
                            <dd class="col-span-3">
                                <div class="text-center inline-block border py-4 px-6 rounded-lg">
                                    <span class="block text-3xl">25 </span>
                                    <span class="block uppercase font-bold tracking-wider text-xs text-gray-700">Cards</span>
                                </div>
                            </dd>
                        </div>
                        <div class="p-8 grid grid-cols-4 items-center bg-gray-100 border-t">
                            <dt class="text-sm font-bold text-gray-600">Card Width (px)</dt>
                            <dd class="col-span-3">
                                <input type="number" class="px-4 py-3 rounded-md border w-1/2" placeholder="200px">
                            </dd>
                        </div>
                        <div class="p-8 grid grid-cols-4 items-center border-t">
                            <dt class="text-sm font-bold text-gray-600">Card Height (px)</dt>
                            <dd class="col-span-3">
                                <input type="number" class="px-4 py-3 rounded-md border w-1/2" placeholder="300px">
                            </dd>
                        </div>
                        <div class="p-8 grid grid-cols-4 items-center bg-gray-100 border-t">
                            <dd class="col-span-4">
                                <button class="block w-full text-center px-6 py-4 rounded-md bg-gray-800 text-white hover:bg-blue-800 hover:shadow-md transition duration-200">
                                    Upload Deck
                                </button>
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: 'Upload Deck'
        }
    }
}
</script>

<style>

</style>