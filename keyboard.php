<!DOCTYPE html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.9.1/underscore-min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/tone/13.0.1/Tone.min.js"></script>
  <script src="https://unpkg.com/peaks.js/dist/peaks.js"></script>
  <script src="scripts/Rhythm.js"></script>
  <script src="scripts/script.js"></script>
  <!-- <link rel="stylesheet" type="text/css" href="styles/logo_style.css"> -->
  <link rel="stylesheet" type="text/css" href="styles/keyboard_style.css" />
  <!-- <link href='https://css.gg/crop.css' rel='stylesheet'> -->
</head>

<body class="no-select">
    <div class="logo-div">
        <img class="tambor-perform-logo" id="keyboard-logo" src="assets/Tambor_Perform_Logo.png" alt="tambor-perform-logo">
    </div>
    <?php 
        $qwerty_keys = ["1234567890-=","qwertyuiop[]","asdfghjkl;'","zxcvbnm,./"];
        $non_alphanumeric_keys = [
            "-" => "minus",
            "=" => "equals",
            "[" => "left-square",
            "]" => "right-square",
            ";" => "semicolon",
            "'" => "apostrophe",
            "," => "comma",
            "." => "period",
            "/" => "slash"
        ];
    ?>
    
    <div class="instrument-div">
        <select class="instrument">
            <option class="keyboard">Keyboard</option>
            <option class="pluck">String</option>
            <option class="drumkit">Drumkit</option>
        </select>
        <select class="tet">
            <option class="12tet">12TET</option>
            <option class="17tet">17TET</option>
            <option class="17tet">19TET</option>
            <option class="22tet">22TET</option>
            <option class="29tet">29TET</option>
            <option class="41tet">41TET</option>
            <!-- <option class="53tet">53TET</option> -->
        </select>
    </div>

    <div class="floating-controls">
        <div class="display-controls">
            <!-- <div class="color-picker-div">
                <input type="color" class="color-picker" value="#1faf28">
            </div> -->
            <label class="dark-mode-toggle">
                <input type="checkbox" class="dark-mode-checkbox">
                <span class="dark-mode-slider round"></span>
            </label>
        </div>
        <div class="daw-track-circle-btn floating-circle-btn floating-record-btn">
            <div class="daw-track-record full-track-record"></div>
        </div>
        <div class="daw-track-circle-btn floating-circle-btn floating-stop-btn disabled">
            <div class="daw-track-stop floating-track-stop"></div>
        </div>
        <div class="daw-circle-btn floating-circle-btn floating-play-btn disabled">
            <div class="daw-play floating-play"></div>
        </div>
        <div class="daw-circle-btn floating-circle-btn floating-pause-btn disabled">
            <div class="daw-pause floating-pause"></div>
        </div>
        <div class="daw-circle-btn floating-circle-btn floating-loop-btn disabled">
            <div class="daw-loop floating-loop">↻</div>
        </div>
    </div>
    <div class="qwerty">
    <?php for ($i=0; $i<=3; $i++) { ?>
        <div class="qwerty-row" id="<?php echo 'row'.strval($i)?>">
        <?php foreach (str_split($qwerty_keys[$i]) as $key) { ?>
            <div class="qwerty-key" id="<?php if (!in_array($key, array_keys($non_alphanumeric_keys))) { echo $key; } else { echo $non_alphanumeric_keys[$key]; } ?>"><?php echo strtoupper($key) ?></div>
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
        <!-- <div class="pluck-basefreq">
            <div class="pluck-basefreq-slider" id="pluck-basefreq-slider">
                <input class="pluck-basefreq-input" name="pluck-basefreq-input" id="pluck-basefreq-input" orient="horizontal" type="range" step=".1" min="20" max="130">
                <input class="pluck-basefreq-box" type="text" id="pluck-basefreq-value">
            </div>
            <label class="pluck-basefreq-label" for="pluck-basefreq-box">BASE FREQ</label>
        </div> -->
        <!-- <div class="metal-basefreq">
            <div class="metal-basefreq-slider" id="metal-basefreq-slider">
                <input class="metal-basefreq-input" name="metal-basefreq-input" id="metal-basefreq-input" orient="horizontal" type="range" step=".1" min="20" max="500">
                <input class="metal-basefreq-box" type="text" id="metal-basefreq-value">
            </div>
            <label class="metal-basefreq-label" for="metal-basefreq-box">BASE FREQ</label>
        </div> -->
    </form>
    <div class="synth-vol">
        <div class="synth-vol-slider" id="synth-vol-slider">
            <input class="synth-vol-input" name="synth-vol-input" id="synth-vol-input" orient="horizontal" type="range" step="1" min="-36" max="0">
            <input class="synth-vol-box" type="text" id="synth-vol-value">
        </div>
        <label class="synth-vol-label" for="synth-vol-value">VOLUME</label>
    </div>
    <div class="synth-basefreq">
        <div class="synth-basefreq-slider" id="synth-basefreq-slider">
            <input class="synth-basefreq-input" name="synth-basefreq-input" id="synth-basefreq-input" orient="horizontal" type="range" step=".1" min="20" max="2500">
            <input class="synth-basefreq-box" type="text" id="synth-basefreq-value">
        </div>
        <label class="synth-basefreq-label" for="synth-basefreq-value">BASE FREQ</label>
    </div>
    <form class="synth-env">
        <div class="osc-div">
            <select class="sound" name="sound">
                <?php 
                $sounds = ["Synth","MonoSynth","AMSynth","FMSynth"];
                for ($i=0; $i<=3; $i++) { ?>
                <option class="sound-option" value="<?php echo $i; ?>"><?php echo $sounds[$i]; ?></option>
                <?php }; ?>
            </select>
            <select class="osc" name="osc">
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
        <div class="env-curves" id="attack-curves">
            <img class="env-curve attack-curve curr-curve" id="attack-curve-lin" name="linear" src="assets/linear.png" alt="lin"></img>
            <img class="env-curve attack-curve" id="attack-curve-exp" name="exponential" src="assets/exponential.png" alt="exp"></img>
            <img class="env-curve attack-curve" id="attack-curve-sin" name="sine" src="assets/sine.png" alt="sin"></img>
            <img class="env-curve attack-curve" id="attack-curve-cos" name="cosine" src="assets/cosine.png" alt="cos"></img>
        </div>
        <div class="env-slider" id="decay-slider">
            <input class="decay-input" name="decay-input" id="decay-input" orient="vertical" type="range" step=".01" min=".01" max=".75">
            <input class="env-box" type="text" id="decay-value">
            <label class="env-label" for="decay-value">D</label>
        </div>
        <div class="env-curves" id="decay-curves">
            <img class="env-curve decay-curve curr-curve" id="decay-curve-lin" name="linear" src="assets/linear.png" alt="lin"></img>
            <img class="env-curve decay-curve" id="decay-curve-exp" name="exponential" src="assets/exponential.png" alt="exp"></img>
        </div>
        <div class="env-slider" id="sustain-slider">
            <input class="sustain-input" name="sustain-input" id="sustain-input" orient="vertical" type="range" step=".01" min=".01" max=".75">
            <input class="env-box" type="text" id="sustain-value">
            <label class="env-label" for="sustain-value">S</label>
        </div>
        <div class="env-curves" id="release-curves">
            <img class="env-curve release-curve" id="release-curve-lin" name="linear" src="assets/linear.png" alt="lin"></img>
            <img class="env-curve release-curve curr-curve" id="release-curve-exp" name="exponential" src="assets/exponential.png" alt="exp"></img>
            <img class="env-curve release-curve" id="release-curve-sin" name="sine" src="assets/sine.png" alt="sin"></img>
            <img class="env-curve release-curve" id="release-curve-cos" name="cosine" src="assets/cosine.png" alt="cos"></img>
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

    <div class="drumkit-div">
        <div class="drumkit-row-1">
            <div class="drumkit-div-1">
                <div class="drum" id="high-tom">
                    <div class="drumkit-dropdown" id="high-tom-dropdown">
                        <div class="drumkit-arrow" id="high-tom-arrow"></div>
                    </div>
                    <form class="high-tom-env">
                        <div class="high-tom-env-1">
                            <div class="high-tom-basefreq">
                                <div class="high-tom-basefreq-slider" id="high-tom-basefreq-slider">
                                    <input class="high-tom-basefreq-input" name="high-tom-basefreq-input" id="high-tom-basefreq-input" orient="horizontal" type="range" step=".1" min="10" max="100">
                                    <input class="high-tom-basefreq-box" type="text" id="high-tom-basefreq-value">
                                </div>
                                <label class="high-tom-basefreq-label" for="high-tom-basefreq-box">BASE FREQ</label>
                            </div>
                            <div class="high-tom-env-adsr">
                                <div class="high-tom-env-slider" id="high-tom-attack-slider">
                                    <input class="high-tom-attack-input" name="high-tom-attack-input" id="high-tom-attack-input" orient="vertical" type="range" step=".01" min=".01" max=".25">
                                    <input class="high-tom-env-box" type="text" id="high-tom-attack-value">
                                    <label class="high-tom-env-label" for="high-tom-attack-value">A</label>
                                </div>
                                <div class="high-tom-env-slider" id="high-tom-decay-slider">
                                    <input class="high-tom-decay-input" name="high-tom-decay-input" id="high-tom-decay-input" orient="vertical" type="range" step=".01" min=".01" max=".75">
                                    <input class="high-tom-env-box" type="text" id="high-tom-decay-value">
                                    <label class="high-tom-env-label" for="high-tom-decay-value">D</label>
                                </div>
                                <div class="high-tom-env-slider" id="high-tom-sustain-slider">
                                    <input class="high-tom-sustain-input" name="high-tom-sustain-input" id="high-tom-sustain-input" orient="vertical" type="range" step=".01" min=".01" max=".75">
                                    <input class="high-tom-env-box" type="text" id="high-tom-sustain-value">
                                    <label class="high-tom-env-label" for="high-tom-sustain-value">S</label>
                                </div>
                                <div class="high-tom-env-slider" id="high-tom-release-slider">
                                    <input class="high-tom-release-input" name="high-tom-release-input" id="high-tom-release-input" orient="vertical" type="range" step=".01" min=".01" max="5">
                                    <input class="high-tom-env-box" type="text" id="high-tom-release-value">
                                    <label class="high-tom-env-label" for="high-tom-release-value">R</label>
                                </div>
                            </div>
                        </div>
                        <div class="high-tom-env-2">
                            <div class="high-tom-pitch-decay">
                                <div class="high-tom-pitch-decay-slider" id="high-tom-pitch-decay-slider">
                                    <input class="high-tom-pitch-decay-input" name="high-tom-pitch-decay-input" id="high-tom-pitch-decay-input" orient="horizontal" type="range" step=".01" min=".01" max="1">
                                    <input class="high-tom-pitch-decay-box" type="text" id="high-tom-pitch-decay-value">
                                </div>
                                <label class="high-tom-pitch-decay-label" for="high-tom-pitch-decay-value">PITCH DECAY</label>
                            </div>
                            <div class="high-tom-octaves">
                                <div class="high-tom-octaves-slider" id="high-tom-octaves-slider">
                                    <input class="high-tom-octaves-input" name="high-tom-octaves-input" id="high-tom-octaves-input" orient="horizontal" type="range" step=".1" min=".1" max="20">
                                    <input class="high-tom-octaves-box" type="text" id="high-tom-octaves-value">
                                </div>
                                <label class="high-tom-octaves-label" for="high-tom-octaves-value">OCTAVES</label>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="cymbal" id="crash-cymbal">
                    <div class="drumkit-dropdown" id="crash-cymbal-dropdown">
                        <div class="drumkit-arrow" id="crash-cymbal-arrow"></div>
                    </div>
                    <form class="crash-cymbal-env">
                        <div class="crash-cymbal-env-1">
                            <div class="crash-cymbal-basefreq">
                                <div class="crash-cymbal-basefreq-slider" id="crash-cymbal-basefreq-slider">
                                    <input class="crash-cymbal-basefreq-input" name="crash-cymbal-basefreq-input" id="crash-cymbal-basefreq-input" orient="horizontal" type="range" step=".1" min="20" max="500">
                                    <input class="crash-cymbal-basefreq-box" type="text" id="crash-cymbal-basefreq-value">
                                </div>
                                <label class="crash-cymbal-basefreq-label" for="crash-cymbal-basefreq-box">BASE FREQ</label>
                            </div>
                            <div class="crash-cymbal-env-adsr">
                                <div class="crash-cymbal-env-slider" id="crash-cymbal-attack-slider">
                                    <input class="crash-cymbal-attack-input" name="crash-cymbal-attack-input" id="crash-cymbal-attack-input" orient="vertical" type="range" step=".01" min=".01" max=".25">
                                    <input class="crash-cymbal-env-box" type="text" id="crash-cymbal-attack-value">
                                    <label class="crash-cymbal-env-label" for="crash-cymbal-attack-value">A</label>
                                </div>
                                <div class="crash-cymbal-env-slider" id="crash-cymbal-decay-slider">
                                    <input class="crash-cymbal-decay-input" name="crash-cymbal-decay-input" id="crash-cymbal-decay-input" orient="vertical" type="range" step=".01" min=".01" max=".75">
                                    <input class="crash-cymbal-env-box" type="text" id="crash-cymbal-decay-value">
                                    <label class="crash-cymbal-env-label" for="crash-cymbal-decay-value">D</label>
                                </div>
                                <div class="crash-cymbal-env-slider" id="crash-cymbal-release-slider">
                                    <input class="crash-cymbal-release-input" name="crash-cymbal-release-input" id="crash-cymbal-release-input" orient="vertical" type="range" step=".01" min=".01" max="5">
                                    <input class="crash-cymbal-env-box" type="text" id="crash-cymbal-release-value">
                                    <label class="crash-cymbal-env-label" for="crash-cymbal-release-value">R</label>
                                </div>
                            </div>
                        </div>
                        <div class="crash-cymbal-env-2">
                            <div class="crash-cymbal-harmonicity">
                                <div class="crash-cymbal-harmonicity-slider" id="crash-cymbal-harmonicity-slider">
                                    <input class="crash-cymbal-harmonicity-input" name="crash-cymbal-harmonicity-input" id="crash-cymbal-harmonicity-input" orient="horizontal" type="range" step="1" min="1" max="75">
                                    <input class="crash-cymbal-harmonicity-box" type="text" id="crash-cymbal-harmonicity-value">
                                </div>
                                <label class="crash-cymbal-harmonicity-label" for="crash-cymbal-harmonicity-value">HARMONICITY</label>
                            </div>
                            <div class="crash-cymbal-modulation">
                                <div class="crash-cymbal-modulation-slider" id="crash-cymbal-modulation-slider">
                                    <input class="crash-cymbal-modulation-input" name="crash-cymbal-modulation-input" id="crash-cymbal-modulation-input" orient="horizontal" type="range" step=".1" min=".1" max="100">
                                    <input class="crash-cymbal-modulation-box" type="text" id="crash-cymbal-modulation-value">
                                </div>
                                <label class="crash-cymbal-modulation-label" for="crash-cymbal-modulation-value">MODULATION</label>
                            </div>
                            <div class="crash-cymbal-resonance">
                                <div class="crash-cymbal-resonance-slider" id="crash-cymbal-resonance-slider">
                                    <input class="crash-cymbal-resonance-input" name="crash-cymbal-resonance-input" id="crash-cymbal-resonance-input" orient="horizontal" type="range" step="1" min="1" max="15000">
                                    <input class="crash-cymbal-resonance-box" type="text" id="crash-cymbal-resonance-value">
                                </div>
                                <label class="crash-cymbal-resonance-label" for="crash-cymbal-modulation-value">RESONANCE</label>
                            </div>
                            <div class="crash-cymbal-octaves">
                                <div class="crash-cymbal-octaves-slider" id="crash-cymbal-octaves-slider">
                                    <input class="crash-cymbal-octaves-input" name="crash-cymbal-octaves-input" id="crash-cymbal-octaves-input" orient="horizontal" type="range" step=".1" min=".1" max="5">
                                    <input class="crash-cymbal-octaves-box" type="text" id="crash-cymbal-octaves-value">
                                </div>
                                <label class="crash-cymbal-octaves-label" for="crash-cymbal-octaves-value">OCTAVES</label>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="drum" id="mid-tom">
                    <div class="drumkit-dropdown" id="mid-tom-dropdown">
                        <div class="drumkit-arrow" id="mid-tom-arrow"></div>
                    </div>
                    <form class="mid-tom-env">
                        <div class="mid-tom-env-1">
                            <div class="mid-tom-basefreq">
                                <div class="mid-tom-basefreq-slider" id="mid-tom-basefreq-slider">
                                    <input class="mid-tom-basefreq-input" name="mid-tom-basefreq-input" id="mid-tom-basefreq-input" orient="horizontal" type="range" step=".1" min="10" max="100">
                                    <input class="mid-tom-basefreq-box" type="text" id="mid-tom-basefreq-value">
                                </div>
                                <label class="mid-tom-basefreq-label" for="mid-tom-basefreq-box">BASE FREQ</label>
                            </div>
                            <div class="mid-tom-env-adsr">
                                <div class="mid-tom-env-slider" id="mid-tom-attack-slider">
                                    <input class="mid-tom-attack-input" name="mid-tom-attack-input" id="mid-tom-attack-input" orient="vertical" type="range" step=".01" min=".01" max=".25">
                                    <input class="mid-tom-env-box" type="text" id="mid-tom-attack-value">
                                    <label class="mid-tom-env-label" for="mid-tom-attack-value">A</label>
                                </div>
                                <div class="mid-tom-env-slider" id="mid-tom-decay-slider">
                                    <input class="mid-tom-decay-input" name="mid-tom-decay-input" id="mid-tom-decay-input" orient="vertical" type="range" step=".01" min=".01" max=".75">
                                    <input class="mid-tom-env-box" type="text" id="mid-tom-decay-value">
                                    <label class="mid-tom-env-label" for="mid-tom-decay-value">D</label>
                                </div>
                                <div class="mid-tom-env-slider" id="mid-tom-sustain-slider">
                                    <input class="mid-tom-sustain-input" name="mid-tom-sustain-input" id="mid-tom-sustain-input" orient="vertical" type="range" step=".01" min=".01" max=".75">
                                    <input class="mid-tom-env-box" type="text" id="mid-tom-sustain-value">
                                    <label class="mid-tom-env-label" for="mid-tom-sustain-value">S</label>
                                </div>
                                <div class="mid-tom-env-slider" id="mid-tom-release-slider">
                                    <input class="mid-tom-release-input" name="mid-tom-release-input" id="mid-tom-release-input" orient="vertical" type="range" step=".01" min=".01" max="5">
                                    <input class="mid-tom-env-box" type="text" id="mid-tom-release-value">
                                    <label class="mid-tom-env-label" for="mid-tom-release-value">R</label>
                                </div>
                            </div> 
                        </div>
                        <div class="mid-tom-env-2">
                            <div class="mid-tom-pitch-decay">
                                <div class="mid-tom-pitch-decay-slider" id="mid-tom-pitch-decay-slider">
                                    <input class="mid-tom-pitch-decay-input" name="mid-tom-pitch-decay-input" id="mid-tom-pitch-decay-input" orient="horizontal" type="range" step=".01" min=".01" max="1">
                                    <input class="mid-tom-pitch-decay-box" type="text" id="mid-tom-pitch-decay-value">
                                </div>
                                <label class="mid-tom-pitch-decay-label" for="mid-tom-pitch-decay-value">PITCH DECAY</label>
                            </div>
                            <div class="mid-tom-octaves">
                                <div class="mid-tom-octaves-slider" id="mid-tom-octaves-slider">
                                    <input class="mid-tom-octaves-input" name="mid-tom-octaves-input" id="mid-tom-octaves-input" orient="horizontal" type="range" step=".1" min=".1" max="20">
                                    <input class="mid-tom-octaves-box" type="text" id="mid-tom-octaves-value">
                                </div>
                                <label class="mid-tom-octaves-label" for="mid-tom-octaves-value">OCTAVES</label>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="cymbal" id="ride-cymbal">
                    <div class="drumkit-dropdown" id="ride-cymbal-dropdown">
                        <div class="drumkit-arrow" id="ride-cymbal-arrow"></div>
                    </div>
                    <form class="ride-cymbal-env">
                        <div class="ride-cymbal-env-1">
                            <div class="ride-cymbal-basefreq">
                                <div class="ride-cymbal-basefreq-slider" id="ride-cymbal-basefreq-slider">
                                    <input class="ride-cymbal-basefreq-input" name="ride-cymbal-basefreq-input" id="ride-cymbal-basefreq-input" orient="horizontal" type="range" step=".1" min="20" max="500">
                                    <input class="ride-cymbal-basefreq-box" type="text" id="ride-cymbal-basefreq-value">
                                </div>
                                <label class="ride-cymbal-basefreq-label" for="ride-cymbal-basefreq-box">BASE FREQ</label>
                            </div>
                            <div class="ride-cymbal-env-adsr">
                                <div class="ride-cymbal-env-slider" id="ride-cymbal-attack-slider">
                                    <input class="ride-cymbal-attack-input" name="ride-cymbal-attack-input" id="ride-cymbal-attack-input" orient="vertical" type="range" step=".01" min=".01" max=".25">
                                    <input class="ride-cymbal-env-box" type="text" id="ride-cymbal-attack-value">
                                    <label class="ride-cymbal-env-label" for="ride-cymbal-attack-value">A</label>
                                </div>
                                <div class="ride-cymbal-env-slider" id="ride-cymbal-decay-slider">
                                    <input class="ride-cymbal-decay-input" name="ride-cymbal-decay-input" id="ride-cymbal-decay-input" orient="vertical" type="range" step=".01" min=".01" max=".75">
                                    <input class="ride-cymbal-env-box" type="text" id="ride-cymbal-decay-value">
                                    <label class="ride-cymbal-env-label" for="ride-cymbal-decay-value">D</label>
                                </div>
                                <div class="ride-cymbal-env-slider" id="ride-cymbal-release-slider">
                                    <input class="ride-cymbal-release-input" name="ride-cymbal-release-input" id="ride-cymbal-release-input" orient="vertical" type="range" step=".01" min=".01" max="5">
                                    <input class="ride-cymbal-env-box" type="text" id="ride-cymbal-release-value">
                                    <label class="ride-cymbal-env-label" for="ride-cymbal-release-value">R</label>
                                </div>
                            </div>
                        </div>
                        <div class="ride-cymbal-env-2">
                            <div class="ride-cymbal-harmonicity">
                                <div class="ride-cymbal-harmonicity-slider" id="ride-cymbal-harmonicity-slider">
                                    <input class="ride-cymbal-harmonicity-input" name="ride-cymbal-harmonicity-input" id="ride-cymbal-harmonicity-input" orient="horizontal" type="range" step="1" min="1" max="75">
                                    <input class="ride-cymbal-harmonicity-box" type="text" id="ride-cymbal-harmonicity-value">
                                </div>
                                <label class="ride-cymbal-harmonicity-label" for="ride-cymbal-harmonicity-value">HARMONICITY</label>
                            </div>
                            <div class="ride-cymbal-modulation">
                                <div class="ride-cymbal-modulation-slider" id="ride-cymbal-modulation-slider">
                                    <input class="ride-cymbal-modulation-input" name="ride-cymbal-modulation-input" id="ride-cymbal-modulation-input" orient="horizontal" type="range" step=".1" min=".1" max="100">
                                    <input class="ride-cymbal-modulation-box" type="text" id="ride-cymbal-modulation-value">
                                </div>
                                <label class="ride-cymbal-modulation-label" for="ride-cymbal-modulation-value">MODULATION</label>
                            </div>
                            <div class="ride-cymbal-resonance">
                                <div class="ride-cymbal-resonance-slider" id="ride-cymbal-resonance-slider">
                                    <input class="ride-cymbal-resonance-input" name="ride-cymbal-resonance-input" id="ride-cymbal-resonance-input" orient="horizontal" type="range" step="1" min="1" max="15000">
                                    <input class="ride-cymbal-resonance-box" type="text" id="ride-cymbal-resonance-value">
                                </div>
                                <label class="ride-cymbal-resonance-label" for="ride-cymbal-modulation-value">RESONANCE</label>
                            </div>
                            <div class="ride-cymbal-octaves">
                                <div class="ride-cymbal-octaves-slider" id="ride-cymbal-octaves-slider">
                                    <input class="ride-cymbal-octaves-input" name="ride-cymbal-octaves-input" id="ride-cymbal-octaves-input" orient="horizontal" type="range" step=".1" min=".1" max="5">
                                    <input class="ride-cymbal-octaves-box" type="text" id="ride-cymbal-octaves-value">
                                </div>
                                <label class="ride-cymbal-octaves-label" for="ride-cymbal-octaves-value">OCTAVES</label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="drumkit-row-2">
            <div class="drumkit-div-2">
                <div class="drum" id="kick">
                    <div class="drumkit-dropdown" id="kick-dropdown">
                        <div class="drumkit-arrow" id="kick-arrow"></div>
                    </div>
                    <form class="kick-env">
                        <div class="kick-env-1">
                            <div class="kick-basefreq">
                                <div class="kick-basefreq-slider" id="kick-basefreq-slider">
                                    <input class="kick-basefreq-input" name="kick-basefreq-input" id="kick-basefreq-input" orient="horizontal" type="range" step=".1" min="10" max="100">
                                    <input class="kick-basefreq-box" type="text" id="kick-basefreq-value">
                                </div>
                                <label class="kick-basefreq-label" for="kick-basefreq-box">BASE FREQ</label>
                            </div>
                            <div class="kick-env-adsr">
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
                </div>
                <div class="drum" id="snare">
                    <div class="drumkit-dropdown" id="snare-dropdown">
                        <div class="drumkit-arrow" id="snare-arrow"></div>
                    </div>
                </div>
                <div class="cymbal" id="hi-hat">
                    <div class="drumkit-dropdown" id="hi-hat-dropdown">
                        <div class="drumkit-arrow" id="hi-hat-arrow"></div>
                    </div>
                </div>
                <div class="drum" id="low-tom">
                    <div class="drumkit-dropdown" id="low-tom-dropdown">
                        <div class="drumkit-arrow" id="low-tom-arrow"></div>
                    </div>
                    <form class="low-tom-env">
                        <div class="low-tom-env-1">
                            <div class="low-tom-basefreq">
                                <div class="low-tom-basefreq-slider" id="low-tom-basefreq-slider">
                                    <input class="low-tom-basefreq-input" name="low-tom-basefreq-input" id="low-tom-basefreq-input" orient="horizontal" type="range" step=".1" min="10" max="100">
                                    <input class="low-tom-basefreq-box" type="text" id="low-tom-basefreq-value">
                                </div>
                                <label class="low-tom-basefreq-label" for="low-tom-basefreq-box">BASE FREQ</label>
                            </div>
                            <div class="low-tom-env-adsr">
                                <div class="low-tom-env-slider" id="low-tom-attack-slider">
                                    <input class="low-tom-attack-input" name="low-tom-attack-input" id="low-tom-attack-input" orient="vertical" type="range" step=".01" min=".01" max=".25">
                                    <input class="low-tom-env-box" type="text" id="low-tom-attack-value">
                                    <label class="low-tom-env-label" for="low-tom-attack-value">A</label>
                                </div>
                                <div class="low-tom-env-slider" id="low-tom-decay-slider">
                                    <input class="low-tom-decay-input" name="low-tom-decay-input" id="low-tom-decay-input" orient="vertical" type="range" step=".01" min=".01" max=".75">
                                    <input class="low-tom-env-box" type="text" id="low-tom-decay-value">
                                    <label class="low-tom-env-label" for="low-tom-decay-value">D</label>
                                </div>
                                <div class="low-tom-env-slider" id="low-tom-sustain-slider">
                                    <input class="low-tom-sustain-input" name="low-tom-sustain-input" id="low-tom-sustain-input" orient="vertical" type="range" step=".01" min=".01" max=".75">
                                    <input class="low-tom-env-box" type="text" id="low-tom-sustain-value">
                                    <label class="low-tom-env-label" for="low-tom-sustain-value">S</label>
                                </div>
                                <div class="low-tom-env-slider" id="low-tom-release-slider">
                                    <input class="low-tom-release-input" name="low-tom-release-input" id="low-tom-release-input" orient="vertical" type="range" step=".01" min=".01" max="5">
                                    <input class="low-tom-env-box" type="text" id="low-tom-release-value">
                                    <label class="low-tom-env-label" for="low-tom-release-value">R</label>
                                </div>
                            </div>
                        </div>
                        <div class="low-tom-env-2">
                            <div class="low-tom-pitch-decay">
                                <div class="low-tom-pitch-decay-slider" id="low-tom-pitch-decay-slider">
                                    <input class="low-tom-pitch-decay-input" name="low-tom-pitch-decay-input" id="low-tom-pitch-decay-input" orient="horizontal" type="range" step=".01" min=".01" max="1">
                                    <input class="low-tom-pitch-decay-box" type="text" id="low-tom-pitch-decay-value">
                                </div>
                                <label class="low-tom-pitch-decay-label" for="low-tom-pitch-decay-value">PITCH DECAY</label>
                            </div>
                            <div class="low-tom-octaves">
                                <div class="low-tom-octaves-slider" id="low-tom-octaves-slider">
                                    <input class="low-tom-octaves-input" name="low-tom-octaves-input" id="low-tom-octaves-input" orient="horizontal" type="range" step=".1" min=".1" max="20">
                                    <input class="low-tom-octaves-box" type="text" id="low-tom-octaves-value">
                                </div>
                                <label class="low-tom-octaves-label" for="low-tom-octaves-value">OCTAVES</label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <div class="daw" id="daw">
        <!-- <div class="daw-nav">
            <div class="daw-curr daw-nav-item">RECORD</div>
            <div class="daw-nav-item">EDIT</div>
            <div class="daw-nav-item">IMPORT</div>
            <div class="daw-nav-item">EXPORT</div>
        </div> -->
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
            <div class="daw-circle-btn full-crop-btn disabled">
                <div class="daw-crop"><i class="gg-crop"></i></div>
            </div>
        </div>
        <div class="daw-track track-selected" id="track-0">
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
            <div class="zoomview-container" id="zoomview-0"><div class="overview-container" id="overview-0"></div></div>
            <audio controls class="daw-track-audio hidden" id="audio-0"></audio>
        </div>
    </div>
    <div class="daw-track-new" id="daw-track-new">+</div>
</body>
</html>