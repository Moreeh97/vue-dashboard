<script>

</script>

<template>
 <div class="flex min-h-screen">

     <main class="flex-1 p-6 space-y-6">
       <!-- Summary Section -->
       <section class="bg-white p-6 rounded shadow">
         <h2 class="text-xl font-semibold mb-4">Summary</h2>
         <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
           <div class="bg-blue-100 p-4 rounded text-center">
             <p class="font-bold text-lg">5000</p>
             <p>Projects</p>
           </div>
           <div class="bg-green-100 p-4 rounded text-center">
             <p class="font-bold text-lg">$19B</p>
             <p>Spend Budget</p>
           </div>
           <div class="bg-yellow-100 p-4 rounded text-center">
             <p class="font-bold text-lg">200</p>
             <p>Active Employees</p>
           </div>
           <div class="bg-purple-100 p-4 rounded text-center">
             <p class="font-bold text-lg">6400</p>
             <p>Posts</p>
           </div>
         </div>
       </section>
 
       <!-- Map Section -->
       <section class="bg-white p-6 rounded shadow">
         <h2 class="text-xl font-semibold mb-4">Projects Map</h2>
         <div class="bg-gray-200 h-64 flex items-center justify-center rounded">
           <p class="text-gray-600">Interactive map will display here</p>
         </div>
       </section>
 
       <!-- Reports Section -->
       <section class="bg-white p-6 rounded shadow">
         <h2 class="text-xl font-semibold mb-4">Last Reports</h2>
         <ul class="list-disc list-inside space-y-2">
           <li><a href="#" class="text-blue-600 hover:underline">Africa Reports 2025</a></li>
           <li><a href="#" class="text-blue-600 hover:underline">Budget Reports 2025</a></li>
           <li><a href="#" class="text-blue-600 hover:underline">Self Problems in the Middle East 2025</a></li>
         </ul>
       </section>
     </main>

 

</template>