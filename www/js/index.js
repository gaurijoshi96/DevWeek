/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
 var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
        
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }

};

var tomtom = {

    initialize: function() {
              var route = {
          "points": [{
            "lat": 37.7524152343544,
            "lon":-122.43576049804686
        },
        {
            "lat": 37.70660472542312,
            "lon":-122.43301391601562
        },
        {
            "lat": 37.712059855877314,
            "lon":-122.36434936523438
        },
        {
            "lat": 37.75350561243041,
            "lon":-122.37396240234374
        }]
    }

$.post('https://api.tomtom.com/search/2/searchAlongRoute/pizza[.JSON]',  // url
       { myData: "route" }, // data to be submit
       {contentType: "application/json" },
       function(data, status, xhr) {   // success callback function
                alert('status: ' + status + ', data: ' + data.responseData);
            },
        'json');
        
    }

};
