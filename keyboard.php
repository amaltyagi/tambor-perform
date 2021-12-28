<!DOCTYPE html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.9.1/underscore-min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/tone/13.0.1/Tone.min.js"></script>
  <script src="scripts/Rhythm.js"></script>
  <!-- <script src="https://unpkg.com/peaks.js/dist/peaks.js"></script> -->
  <script src="scripts/script.js"></script>
  <!-- <link rel="stylesheet" type="text/css" href="styles/logo_style.css"> -->
  <link rel="stylesheet" type="text/css" href="styles/keyboard_style.css" />
</head>

<body class="no-select">
    <div class="logo-div">
        <img class="tambor-perform-logo" id="keyboard-logo" src="assets/Tambor_Perform_Logo.png" alt="tambor-perform-logo">
    </div>
    <?php 
        $qwerty_keys = ["1234567890-=","qwertyuiop[]","asdfghjkl;'","zxcvbnm,./"];
        $EDO_layouts = array(
            "12TET" => [["2","3","5","6","7","9","0","="], ["q","w","e","r","t","y","u","i","o","p","[","]"]],
            "17TET" => [["2","3","5","6","7","9","0","=","a","s","f","g","h","k","l","'"],["q","w","e","r","t","y","u","i","o","p","[","]"]],
            "19TET" => [["1","3","4","6","7","8","0","-","q","w","e","r","t","y","u","i","o","p","[","]"], ["a","s","d","f","g","h","j","k","l",";","'"]],
            "21TET" => [["1","3","4","6","7","9","-","=","q","w","e","r","t","y","u","i","o","p","[","]"], ["a","s","d","f","g","h","j","k","l",";","'"]],
            "22TET" => [["2","5","7","9","=","q","e","r","y","u","i","p","[","a","s","d","f","g","h","j","k","l",";","'"], ["z","x","c","v","b","n","m",",",".","/"]],
            "24TET" => [["2","3","5","6","7","9","0","=","s","d","g","h","j","l",";"], ["q","w","e","r","t","y","u","i","o","p","[","]","z","x","c","v","b","n","m",",",".","/"]],       
            "29TET" => [["s","e","4","5","d","r","t","g","y","h","u","8","9","j","i","o","l","p","-","=",";","["], ["z","x","v","b","n",",",".","/"]],
            "41TET" => [["q","a","z","2","w","s","3","e","d","c","4","f","v","5","g","b","6","y","h","n","u","j","m","8","i",",","9","o","l",".","0",";","/","-"],
                       ["1","x","r","t","7","k","p","="]],
            "53TET_to12" => [["2","3","5","6","7","9","0","="], ["q","w","e","r","t","y","u","i","o","p","[","]"]],      
        );
        $edo = '12TET';

        $blacks = $EDO_layouts[$edo][0];
        $whites = $EDO_layouts[$edo][1];
    ?>
    <!-- <nav>
        <a class="curr" href="index.php">12TET</a>
        <a href="keyboard17.php">17TET</a>
        <a href="keyboard22.php">22TET</a>
        <a href="keyboard29.php">29TET</a>
        <a href="keyboard41.php">41TET</a>
        <a href="keyboard53.php">53TET</a>
    </nav><br /> -->
    
    <div class="instrument-div">
        <select class="instrument">
            <option class="synth">Synth</option>
            <option class="pluck">String</option>
            <option class="metal">Cymbal</option>
            <option class="membrane">Kick</option>
            <option class="drumkit">Drumkit</option>
        </select>
    </div>
    <div class="qwerty">
    <?php for ($i=0; $i<=3; $i++) { ?>
        <div class="qwerty-row" id="<?php echo 'row'.strval($i)?>" style="margin-left: <?php if ($edo != '12TET') {echo strval(45*$i).'px';} else {echo strval(25*$i).'px';} ?>" >
            <?php foreach (str_split($qwerty_keys[$i]) as $key) { ?>
                <div class="<?php 
                    $c = "qwerty-key";
                    if (in_array($key, $blacks)) { $c .= " black-key"; } 
                    elseif (in_array($key, $whites)) { $c .= " white-key"; } 
                    else { $c .= " disabled"; }
                    echo $c; 
                ?>" id="<?php echo $key ?>"><?php echo strtoupper($key) ?></div>
            <?php } ?>
        </div>
    <?php } ?>
        <div class="bottom-row">
            <div class="qwerty-key white-key opt-key" id="opt-key-1"><<</div> <!-- ⌥ -->
            <div class="qwerty-key white-key cmd-key" id="cmd-key-1"><</div>  <!-- ⌘ -->
            <div class="space-key" id="space-key"></div>
            <div class="qwerty-key white-key cmd-key" id="cmd-key-2">></div>
            <div class="qwerty-key white-key opt-key" id="opt-key-2">>></div>
        </div>
    </div>
    
    <form class="cover-all">
        <div class="vol">
            <div class="vol-slider" id="vol-slider">
                <input class="vol-input" name="vol-input" id="vol-input" orient="horizontal" type="range" step="1" min="-36" max="0">
                <input class="vol-box" type="text" id="vol-value">
            </div>
            <label class="vol-label" for="vol-value">VOLUME</label>
        </div>
        <div class="synth-basefreq">
            <div class="synth-basefreq-slider" id="synth-basefreq-slider">
                <input class="synth-basefreq-input" name="synth-basefreq-input" id="synth-basefreq-input" orient="horizontal" type="range" step=".1" min="20" max="2500">
                <input class="synth-basefreq-box" type="text" id="synth-basefreq-value">
            </div>
            <label class="synth-basefreq-label" for="synth-basefreq-value">BASE FREQ</label>
        </div>
        <div class="pluck-basefreq">
            <div class="pluck-basefreq-slider" id="pluck-basefreq-slider">
                <input class="pluck-basefreq-input" name="pluck-basefreq-input" id="pluck-basefreq-input" orient="horizontal" type="range" step=".1" min="20" max="130">
                <input class="pluck-basefreq-box" type="text" id="pluck-basefreq-value">
            </div>
            <label class="pluck-basefreq-label" for="pluck-basefreq-box">BASE FREQ</label>
        </div>
        <div class="metal-basefreq">
            <div class="metal-basefreq-slider" id="metal-basefreq-slider">
                <input class="metal-basefreq-input" name="metal-basefreq-input" id="metal-basefreq-input" orient="horizontal" type="range" step=".1" min="20" max="500">
                <input class="metal-basefreq-box" type="text" id="metal-basefreq-value">
            </div>
            <label class="metal-basefreq-label" for="metal-basefreq-box">BASE FREQ</label>
        </div>
        <div class="kick-basefreq">
            <div class="kick-basefreq-slider" id="kick-basefreq-slider">
                <input class="kick-basefreq-input" name="kick-basefreq-input" id="kick-basefreq-input" orient="horizontal" type="range" step=".1" min="10" max="100">
                <input class="kick-basefreq-box" type="text" id="kick-basefreq-value">
            </div>
            <label class="kick-basefreq-label" for="kick-basefreq-box">BASE FREQ</label>
        </div>
    </form>
    
    <form class="synth-env">
        <div class="osc-div">
            <select class="osc" name="osc" disabled>
                <?php 
                $waves = ["Sine","Square","Triangle","Sawtooth"];
                for ($i=0; $i<=3; $i++) { ?>
                <option class="osc-option" value="<?php echo strtolower($waves[$i]); ?>"><?php echo $waves[$i]; ?></option>
                <?php }; ?>
            </select>
            <div class="partial">
                <div class="partial-slider" id="partial-slider">
                    <input class="partial-input" name="partial-input" id="partial-input" orient="horizontal" type="range" step="1" min="1" max="100">
                    <input class="partial-box" type="text" id="partial-value">
                </div>
                <label class="partial-label" for="partial-value">PARTIALS</label>
            </div>
        </div>
        
        <div class="env-slider" id="attack-slider">
            <input class="attack-input" name="attack-input" id="attack-input" orient="vertical" type="range" step=".01" min=".01" max=".25">
            <input class="env-box" type="text" id="attack-value">
            <label class="env-label" for="attack-value">A</label>
        </div>
        <div class="env-slider" id="decay-slider">
            <input class="decay-input" name="decay-input" id="decay-input" orient="vertical" type="range" step=".01" min=".01" max=".75">
            <input class="env-box" type="text" id="decay-value">
            <label class="env-label" for="decay-value">D</label>
        </div>
        <div class="env-slider" id="sustain-slider">
            <input class="sustain-input" name="sustain-input" id="sustain-input" orient="vertical" type="range" step=".01" min=".01" max=".75">
            <input class="env-box" type="text" id="sustain-value">
            <label class="env-label" for="sustain-value">S</label>
        </div>
        <div class="env-slider" id="release-slider">
            <input class="release-input" name="release-input" id="release-input" orient="vertical" type="range" step=".01" min=".01" max="5">
            <input class="env-box" type="text" id="release-value">
            <label class="env-label" for="release-value">R</label>
        </div>
    </form>

    <form class="pluck-env">
        <div class="attack-noise">
            <div class="attack-noise-slider" id="attack-noise-slider">
                <input class="attack-noise-input" name="attack-noise-input" id="attack-noise-input" orient="vertical" type="range" step=".1" min=".1" max="20">
                <input class="attack-noise-box" type="text" id="attack-noise-value">
            </div>
            <label class="attack-noise-label" for="attack-noise-value">ATTACK NOISE</label>
        </div>
        <div class="dampening">
            <div class="dampening-slider" id="dampening-slider">
                <input class="dampening-input" name="dampening-input" id="dampening-input" orient="vertical" type="range" step="1" min="1" max="10000">
                <input class="dampening-box" type="text" id="dampening-value">
            </div>
            <label class="dampening-label" for="dampening-value">DAMPENING</label>
        </div>
        <div class="pluck-resonance">
            <div class="pluck-resonance-slider" id="pluck-resonance-slider">
                <input class="pluck-resonance-input" name="pluck-resonance-input" id="pluck-resonance-input" orient="vertical" type="range" step=".01" min="0" max=".99">
                <input class="pluck-resonance-box" type="text" id="pluck-resonance-value">
            </div>
            <label class="pluck-resonance-label" for="pluck-resonance-value">RESONANCE</label>
        </div>
    </form>
 
    <form class="metal-env">
        <div class="metal-env-1">
            <div class="metal-env-slider" id="metal-attack-slider">
                <input class="metal-attack-input" name="metal-attack-input" id="metal-attack-input" orient="vertical" type="range" step=".01" min=".01" max=".25">
                <input class="metal-env-box" type="text" id="metal-attack-value">
                <label class="metal-env-label" for="metal-attack-value">A</label>
            </div>
            <div class="metal-env-slider" id="metal-decay-slider">
                <input class="metal-decay-input" name="metal-decay-input" id="metal-decay-input" orient="vertical" type="range" step=".01" min=".01" max=".75">
                <input class="metal-env-box" type="text" id="metal-decay-value">
                <label class="metal-env-label" for="metal-decay-value">D</label>
            </div>
            <div class="metal-env-slider" id="metal-release-slider">
                <input class="metal-release-input" name="metal-release-input" id="metal-release-input" orient="vertical" type="range" step=".01" min=".01" max="5">
                <input class="metal-env-box" type="text" id="metal-release-value">
                <label class="metal-env-label" for="metal-release-value">R</label>
            </div>
        </div>
        <div class="metal-env-2">
            <div class="metal-harmonicity">
                <div class="metal-harmonicity-slider" id="metal-harmonicity-slider">
                    <input class="metal-harmonicity-input" name="metal-harmonicity-input" id="metal-harmonicity-input" orient="horizontal" type="range" step="1" min="1" max="75">
                    <input class="metal-harmonicity-box" type="text" id="metal-harmonicity-value">
                </div>
                <label class="metal-harmonicity-label" for="metal-harmonicity-value">HARMONICITY</label>
            </div>
            <div class="metal-modulation">
                <div class="modulation-slider" id="metal-modulation-slider">
                    <input class="metal-modulation-input" name="metal-modulation-input" id="metal-modulation-input" orient="horizontal" type="range" step=".1" min=".1" max="100">
                    <input class="metal-modulation-box" type="text" id="metal-modulation-value">
                </div>
                <label class="metal-modulation-label" for="metal-modulation-value">MODULATION</label>
            </div>
            <div class="metal-resonance">
                <div class="metal-resonance-slider" id="metal-resonance-slider">
                    <input class="metal-resonance-input" name="metal-resonance-input" id="metal-resonance-input" orient="horizontal" type="range" step="1" min="1" max="15000">
                    <input class="metal-resonance-box" type="text" id="metal-resonance-value">
                </div>
                <label class="metal-resonance-label" for="metal-modulation-value">RESONANCE</label>
            </div>
            <div class="metal-octaves">
                <div class="metal-octaves-slider" id="metal-octaves-slider">
                    <input class="metal-octaves-input" name="metal-octaves-input" id="metal-octaves-input" orient="horizontal" type="range" step=".1" min=".1" max="5">
                    <input class="metal-octaves-box" type="text" id="metal-octaves-value">
                </div>
                <label class="metal-octaves-label" for="metal-octaves-value">OCTAVES</label>
            </div>
        </div>
    </form>

    <form class="kick-env">
        <div class="kick-env-1">
            <div class="kick-env-slider" id="kick-attack-slider">
                <input class="kick-attack-input" name="kick-attack-input" id="kick-attack-input" orient="vertical" type="range" step=".01" min=".01" max=".25">
                <input class="kick-env-box" type="text" id="kick-attack-value">
                <label class="kick-env-label" for="kick-attack-value">A</label>
            </div>
            <div class="kick-env-slider" id="kick-decay-slider">
                <input class="kick-decay-input" name="kick-decay-input" id="kick-decay-input" orient="vertical" type="range" step=".01" min=".01" max=".75">
                <input class="kick-env-box" type="text" id="kick-decay-value">
                <label class="kick-env-label" for="kick-decay-value">D</label>
            </div>
            <div class="kick-env-slider" id="kick-sustain-slider">
                <input class="kick-sustain-input" name="kick-sustain-input" id="kick-sustain-input" orient="vertical" type="range" step=".01" min=".01" max=".75">
                <input class="kick-env-box" type="text" id="kick-sustain-value">
                <label class="kick-env-label" for="kick-sustain-value">S</label>
            </div>
            <div class="kick-env-slider" id="kick-release-slider">
                <input class="kick-release-input" name="kick-release-input" id="kick-release-input" orient="vertical" type="range" step=".01" min=".01" max="5">
                <input class="kick-env-box" type="text" id="kick-release-value">
                <label class="kick-env-label" for="kick-release-value">R</label>
            </div>
        </div>
        <div class="kick-env-2">
            <div class="kick-pitch-decay">
                <div class="kick-pitch-decay-slider" id="kick-pitch-decay-slider">
                    <input class="kick-pitch-decay-input" name="kick-pitch-decay-input" id="kick-pitch-decay-input" orient="horizontal" type="range" step=".01" min=".01" max="1">
                    <input class="kick-pitch-decay-box" type="text" id="kick-pitch-decay-value">
                </div>
                <label class="kick-pitch-decay-label" for="kick-pitch-decay-value">PITCH DECAY</label>
            </div>
            <div class="kick-octaves">
                <div class="kick-octaves-slider" id="kick-octaves-slider">
                    <input class="kick-octaves-input" name="kick-octaves-input" id="kick-octaves-input" orient="horizontal" type="range" step=".1" min=".1" max="20">
                    <input class="kick-octaves-box" type="text" id="kick-octaves-value">
                </div>
                <label class="kick-octaves-label" for="kick-octaves-value">OCTAVES</label>
            </div>
        </div>
    </form>

    <div class="drumkit-div">
        <div class="drumkit-div-1">
            <div class="drum" id="high-tom">

            </div>
            <div class="cymbal" id="crash-cymbal">
            
            </div>
            <div class="drum" id="mid-tom">

            </div>
            <div class="cymbal" id="ride-cymbal">
            
            </div>
        </div>
        <div class="drumkit-div-2">
            <div class="drum" id="kick">
                
            </div>
            <div class="drum" id="snare">
                
            </div>
            <div class="cymbal" id="hi-hat">
                
            </div>
            <div class="drum" id="low-tom">

            </div>
        </div>
    </div>

    <div class="daw" id="daw">
        <div class="daw-nav">
            <div class="daw-curr daw-nav-item">RECORD</div>
            <div class="daw-nav-item">EDIT</div>
            <div class="daw-nav-item">IMPORT</div>
            <div class="daw-nav-item">EXPORT</div>
        </div>
        <div class="daw-circle-btns">
            <div class="daw-circle-btn full-play-btn disabled">
                <div class="daw-play"></div>
            </div>
            <div class="daw-circle-btn full-pause-btn disabled">
                <div class="daw-pause"></div>
            </div>
            <div class="daw-circle-btn full-loop-btn disabled">
                <div class="daw-loop">↻</div>
            </div>
        </div>
        <div class="daw-track" id="track-0">
            <div class="daw-track-left">
                <div class="daw-track-left-top">
                    <div class="daw-track-remove" id="remove-track-0">x</div>
                    <input type="text" class="daw-track-name">
                </div>
                <div class="daw-track-vol">
                    <p>–</p>
                    <input type="range" class="daw-track-vol-slider">
                    <p>+</p>
                </div>
                <div class="daw-track-pan">
                    <p>L</p>
                    <input type="range" class="daw-track-pan-slider">
                    <p>R</p>
                </div>
                <div class="daw-track-mute-solo">
                    <div class="daw-track-mute">M</div>
                    <div class="daw-track-solo">S</div>
                </div>
            </div>
            <div class="daw-track-right">
                <div class="daw-track-circle-btns">
                    <div class="daw-track-circle-btn full-record-btn">
                        <div class="daw-track-record"></div>
                    </div>
                    <div class="daw-track-circle-btn full-stop-btn disabled">
                        <div class="daw-track-stop"></div>
                    </div>
                </div>
            </div>
            <audio controls class="daw-track-audio hidden" id="audio-0"></audio>
        </div>
    </div>
    <div class="daw-track-new">+</div>

    <!-- <script>
    (function(Peaks) {
    const options = {
        zoomview: {
            container: document.getElementById('daw-track-right')
        },
        overview: {
            container: document.getElementById('daw-track-right')
        },
        mediaElement: document.querySelector('audio'),
        webAudio: {
            audioContext: new AudioContext()
        }
    };

    Peaks.init(options, function(err, peaks) {
        // Do something when the waveform is displayed and ready
    });
    })(peaks);
    </script> -->
</body>

</html>