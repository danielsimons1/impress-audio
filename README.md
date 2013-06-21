impress-audio
=============

Author: Daniel Simons<br />
Author Email: daniel.simons1@gmail.com<br />
Version: 1.0.0<br />
License: Free General Public License (GPL)<br />

<h2>Brief</h2>
Small addition to impress.js to allow for html5 audio in your presentation

<h3>HTML</h3>

```html
<!-- Define audio tags in each of your slides -->
<div id="impress" class="present">
    <div id="one" class="step" data-x="-1900" data-y="-150">
        <audio>
            <source src="audio/slide01.m4a" type="audio/mpeg">
        </audio>
        <q><img src="images/slide001.png"></q>
    </div>

    
    <div id="two" class="step" data-x="-1000" data-y="-150">
        <audio>
            <source src="audio/slide01.m4a" type="audio/mpeg">
        </audio>
        <q><img src="images/slide002.png"></q>
    </div>  
</div>
```

<h3>Javascript</h3>
```javascript
<script src="js/impress.js"></ script>
<script src="js/jquery.js"></ script>
<script src="js/impress-audio.js"></ script>
<script>
    impress().init();
    impress().play();
</ script>

```


