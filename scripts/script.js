$(document).ready(function() {
    const qwerty_12 = ["q2w3er5t6y7ui9o0p[=]"];
    var synth_base_freq = 261.6;
    var pluck_base_freq = 40;
    var metal_base_freq = 200;
    var kick_base_freq = 30;
    var base_freq = synth_base_freq;
    var n = 12;
    var keyFreqs = bindToFreqs(qwerty_12, base_freq, n);
    // general initializations
    $(".vol-box").val(-24);
    $(".vol-input").val(-24);
    // synth initializations
    $(".synth-basefreq-input").val(synth_base_freq);
    $(".synth-basefreq-box").val(synth_base_freq);
    $(".osc").val("sine");
    $(".partial-box").val(1);
    $(".partial-input").val(1);
    $(".attack-input").val(.01);
    $(".decay-input").val(.5);
    $(".sustain-input").val(.5);
    $(".release-input").val(2);
    $("#attack-value").val($(".attack-input").val());
    $("#decay-value").val($(".decay-input").val());
    $("#sustain-value").val($(".sustain-input").val());
    $("#release-value").val($(".release-input").val());
    // string initializations
    $(".pluck-basefreq-input").val(pluck_base_freq);
    $(".pluck-basefreq-box").val(pluck_base_freq);
    $(".attack-noise-input").val(1);
    $(".dampening-input").val(8000);
    $(".pluck-resonance-input").val(.93);
    $(".attack-noise-box").val($(".attack-noise-input").val());
    $(".dampening-box").val($(".dampening-input").val());
    $(".pluck-resonance-box").val($(".pluck-resonance-input").val());
    // metal initializations
    $(".metal-basefreq-input").val(metal_base_freq);
    $(".metal-basefreq-box").val(metal_base_freq);
    $(".metal-attack-input").val(.01);
    $(".metal-decay-input").val(.5);
    $(".metal-release-input").val(2);
    $("#metal-attack-value").val($(".metal-attack-input").val());
    $("#metal-decay-value").val($(".metal-decay-input").val());
    $("#metal-release-value").val($(".metal-release-input").val());
    $(".metal-harmonicity-input").val(5.1);
    $(".metal-modulation-input").val(32);
    $(".metal-resonance-input").val(4000);
    $(".metal-octaves-input").val(1.5);
    $(".metal-harmonicity-box").val($(".metal-harmonicity-input").val());
    $(".metal-modulation-box").val($(".metal-modulation-input").val());
    $(".metal-resonance-box").val($(".metal-resonance-input").val());
    $(".metal-octaves-box").val($(".metal-octaves-input").val());
    // kick initializations
    $(".kick-basefreq-input").val(kick_base_freq);
    $(".kick-basefreq-box").val(kick_base_freq);
    $(".kick-attack-input").val(.01);
    $(".kick-decay-input").val(.5);
    $(".kick-sustain-input").val(.5);
    $(".kick-release-input").val(2);
    $("#kick-attack-value").val($(".kick-attack-input").val());
    $("#kick-decay-value").val($(".kick-decay-input").val());
    $("#kick-sustain-value").val($(".kick-decay-input").val());
    $("#kick-release-value").val($(".kick-sustain-input").val());
    $(".kick-pitch-decay-input").val(0.05);
    $(".kick-octaves-input").val(10);
    $(".kick-pitch-decay-box").val($(".kick-pitch-decay-input").val());
    $(".kick-octaves-box").val($(".kick-octaves-input").val());

    // general settings
    var prev_type = $(".instrument").val();
    var prev_vol = $(".vol-input").val();
    // synth settings
    var prev_base_freq = $(".synth-basefreq-input").val();
    var prev_synth_base_freq = $(".synth-basefreq-input").val();
    var prev_osc = $(".osc").val();
    var prev_partial = $(".partial-input").val();
    var prev_attack =  parseFloat($(".attack-input").val());
    var prev_decay =  parseFloat($(".decay-input").val());
    var prev_sustain =  parseFloat($(".sustain-input").val());
    var prev_release =  parseFloat($(".release-input").val());
    // string settings
    var prev_pluck_base_freq = $(".pluck-basefreq-input").val();
    var prev_attack_noise = $(".attack-noise-input").val();
    var prev_dampening = $(".dampening-input").val();
    var prev_pluck_resonance = $(".pluck-resonance-input").val();
    // metal settings
    var prev_metal_base_freq = $(".metal-basefreq-input").val();
    var prev_metal_harmonicity = $(".metal-harmonicity-input").val();
    var prev_metal_modulation = $(".metal-modulation-input").val();
    var prev_metal_resonance = $(".metal-resonance-input").val();
    var prev_metal_octaves = $(".metal-octaves-input").val();
    var prev_metal_attack =  parseFloat($(".metal-attack-input").val());
    var prev_metal_decay =  parseFloat($(".metal-decay-input").val());
    var prev_metal_release =  parseFloat($(".metal-release-input").val());
    // kick settings
    var prev_kick_base_freq = $(".kick-basefreq-input").val();
    var prev_kick_pitch_decay = $(".kick-pitch-decay-input").val();
    var prev_kick_octaves = $(".kick-octaves-input").val();
    var prev_kick_attack =  parseFloat($(".kick-attack-input").val());
    var prev_kick_decay =  parseFloat($(".kick-decay-input").val());
    var prev_kick_sustain =  parseFloat($(".kick-sustain-input").val());
    var prev_kick_release =  parseFloat($(".kick-release-input").val());

    const space_key = document.getElementById("space-key");
    const meta_key_1 = document.getElementById("cmd-key-1");
    const meta_key_2 = document.getElementById("cmd-key-2");
    const opt_key_1 = document.getElementById("opt-key-1");
    const opt_key_2 = document.getElementById("opt-key-2");

    function initSynth(type=prev_type, vol=prev_vol, synth_base_freq=prev_synth_base_freq, osc=prev_osc, partial=prev_partial, attack=prev_attack, decay=prev_decay, sustain=prev_sustain, release=prev_release, pluck_base_freq=prev_pluck_base_freq, attack_noise=prev_attack_noise, dampening=prev_dampening, pluck_resonance=prev_pluck_resonance, metal_base_freq=prev_metal_base_freq, metal_harmonicity=prev_metal_harmonicity, metal_modulation=prev_metal_modulation, metal_resonance=prev_metal_resonance, metal_octaves=prev_metal_octaves, metal_attack=prev_metal_attack, metal_decay=prev_metal_decay, metal_release=prev_metal_release, kick_base_freq=prev_kick_base_freq, kick_pitch_decay=prev_kick_pitch_decay, kick_octaves=prev_kick_octaves, kick_attack=prev_kick_attack, kick_decay=prev_kick_decay, kick_sustain=prev_kick_sustain, kick_release=prev_kick_release) {
        if (type == "Synth") {
            bindToFreqs(qwerty_12, base_freq, n);
            $(".qwerty").show();
            $(".basefreq").show();
            $(".synth-env").show();
            $(".pluck-basefreq").hide();
            $(".pluck-env").hide();
            $(".metal-basefreq").hide();
            $(".metal-env").hide();
            $(".kick-basefreq").hide();
            $(".kick-env").hide();
            $(".drumkit-div").hide();
            base_freq = synth_base_freq;
            keyFreqs = bindToFreqs(qwerty_12, base_freq, n);
            var synth = new Tone.PolySynth(6, Tone.Synth, {
                volume: vol,
                oscillator: {
                    type: osc.toLowerCase().concat(partial),
                },
                envelope: {
                    attack: attack,
                    decay: attack + decay,
                    sustain: attack + decay + sustain,
                    release: attack + decay + sustain + release,
                },
            }).toMaster();
        }

        else if (type == "String") {
            bindToFreqs(qwerty_12, base_freq, n);
            $(".qwerty").show();
            $(".synth-env").hide();
            $(".synth-basefreq").hide();
            $(".pluck-env").show();
            $(".pluck-basefreq").show();
            $(".metal-basefreq").hide();
            $(".metal-env").hide();
            $(".kick-basefreq").hide();
            $(".kick-env").hide();
            $(".drumkit-div").hide();
            base_freq = pluck_base_freq;
            keyFreqs = bindToFreqs(qwerty_12, base_freq, n);
            var synth = new Tone.PluckSynth({ // freq range: 20-130Hz
                attackNoise: attack_noise,
                dampening: dampening,
                resonance: pluck_resonance,
            }).toMaster();
        }

        else if (type == "Cymbal") {
            bindToFreqs(qwerty_12, base_freq, n);
            $(".qwerty").show();
            $(".synth-env").hide();
            $(".synth-basefreq").hide();
            $(".pluck-env").hide();
            $(".pluck-basefreq").hide();
            $(".metal-basefreq").show();
            $(".metal-env").show();
            $(".kick-basefreq").hide();
            $(".kick-env").hide();
            $(".drumkit-div").hide();
            // document.getElementsByClassName("env").hide();
            base_freq = metal_base_freq;
            keyFreqs = bindToFreqs(qwerty_12, base_freq, n);
            var synth = new Tone.MetalSynth({
                volume: vol,
                envelope: {
                    attack: metal_attack,
                    decay: metal_attack + metal_decay,
                    release: metal_attack + metal_decay + metal_release,
                },
                harmonicity: metal_harmonicity,
                modulationIndex: metal_modulation,
                resonance: metal_resonance,
                octaves: metal_octaves,
            }).toMaster();
        }

        else if (type == "Kick") {
            bindToFreqs(qwerty_12, base_freq, n);
            $(".qwerty").show();
            $(".synth-env").hide();
            $(".synth-basefreq").hide();
            $(".pluck-env").hide();
            $(".pluck-basefreq").hide();
            $(".metal-basefreq").hide();
            $(".metal-env").hide();
            $(".kick-basefreq").show();
            $(".kick-env").show();
            $(".drumkit-div").hide();
            base_freq = kick_base_freq;
            keyFreqs = bindToFreqs(qwerty_12, base_freq, n);
            var synth = new Tone.MembraneSynth({
                volume: vol,
                envelope: {
                    attack: kick_attack,
                    decay: kick_attack + kick_decay,
                    sustain: kick_attack + kick_decay + kick_sustain,
                    release: kick_attack + kick_decay + kick_sustain + kick_release,
                },
                pitchDecay: kick_pitch_decay,
                octaves: kick_octaves,
            }).toMaster();
        }

        else if (type == "Drumkit") {
            // bindToDrums(qwerty_drumkit);
            $(".qwerty").hide();
            $(".synth-env").hide();
            $(".synth-basefreq").hide();
            $(".pluck-env").hide();
            $(".pluck-basefreq").hide();
            $(".metal-basefreq").hide();
            $(".metal-env").hide();
            $(".kick-basefreq").hide();
            $(".kick-env").hide();
            $(".drumkit-div").show();
            var snare_synth_membrane = new Tone.MembraneSynth();
            var snare_synth_noise = new Tone.NoiseSynth({
                noise: {
                    type: "brown"
                },
                envelope: {
                    attack: .001,
                    decay: .1,
                    sustain: .02
                },
            }).toMaster();

            var reverb = new Tone.Freeverb({
                roomSize: .7,
                dampening: 8000
            }).toMaster();

            var feedbackDelay = new Tone.FeedbackDelay({
                delayTime: "32n",
                feedback: .25
            });

            var gate = new Tone.Gate(-50);
            var compressor = new Tone.MidSideCompressor();
            var gain = new Tone.Gain();

            snare_synth_membrane.chain(reverb, gate, compressor, gain);
            snare_synth_membrane.chain(gate, compressor, gain);
            snare_synth_noise.chain(gate, compressor, gain);
            gain.chain(Tone.Master);

            var kick_synth = new Tone.MembraneSynth({
                volume: vol,
                envelope: {
                    attack: kick_attack,
                    decay: kick_attack + kick_decay,
                    sustain: kick_attack + kick_decay + kick_sustain,
                    release: kick_attack + kick_decay + kick_sustain + kick_release,
                },
                pitchDecay: kick_pitch_decay,
                octaves: kick_octaves,
            }).toMaster();

            var low_tom_synth = new Tone.MembraneSynth({
                volume: vol,
                envelope: {
                    attack: kick_attack,
                    decay: kick_attack + kick_decay,
                    sustain: kick_attack + kick_decay + kick_sustain,
                    release: kick_attack + kick_decay + kick_sustain + kick_release,
                },
                pitchDecay: kick_pitch_decay,
                octaves: kick_octaves,
            }).toMaster();

            var mid_tom_synth = new Tone.MembraneSynth({
                volume: vol,
                envelope: {
                    attack: kick_attack,
                    decay: kick_attack + kick_decay,
                    sustain: kick_attack + kick_decay + kick_sustain,
                    release: kick_attack + kick_decay + kick_sustain + kick_release,
                },
                pitchDecay: kick_pitch_decay,
                octaves: kick_octaves,
            }).toMaster();

            var high_tom_synth = new Tone.MembraneSynth({
                volume: vol,
                envelope: {
                    attack: kick_attack,
                    decay: kick_attack + kick_decay,
                    sustain: kick_attack + kick_decay + kick_sustain,
                    release: kick_attack + kick_decay + kick_sustain + kick_release,
                },
                pitchDecay: kick_pitch_decay,
                octaves: kick_octaves,
            }).toMaster();

            var ride_cymbal_synth = new Tone.MetalSynth({
                volume: vol,
                envelope: {
                    attack: metal_attack,
                    decay: metal_attack + metal_decay,
                    release: metal_attack + metal_decay + metal_release,
                },
                harmonicity: metal_harmonicity,
                modulationIndex: metal_modulation,
                resonance: metal_resonance,
                octaves: metal_octaves,
            }).toMaster();

            var crash_cymbal_synth = new Tone.MetalSynth({
                volume: vol,
                envelope: {
                    attack: metal_attack,
                    decay: metal_attack + metal_decay,
                    release: metal_attack + metal_decay + metal_release,
                },
                harmonicity: metal_harmonicity,
                modulationIndex: metal_modulation,
                resonance: metal_resonance,
                octaves: metal_octaves,
            }).toMaster();

            $("#snare").on("click", function() {
                snare_synth_noise.triggerAttackRelease("8n");
                // snare_synth_membrane.triggerAttackRelease("G2", "8n");
            });

            $("#kick").on("click", function() {
                kick_synth.triggerAttackRelease("G1", "4n");
            });

            $("#low-tom").on("click", function() {
                low_tom_synth.triggerAttackRelease("G2", "4n");
            });

            $("#mid-tom").on("click", function() {
                mid_tom_synth.triggerAttackRelease("C3", "4n");
            });

            $("#high-tom").on("click", function() {
                high_tom_synth.triggerAttackRelease("G3", "4n");
            });

            $("#ride-cymbal").on("click", function() {
                ride_cymbal_synth.triggerAttackRelease();
            });

            $("#crash-cymbal").on("click", function() {
                snare_synth_noise.triggerAttackRelease("32n");
                // crash_cymbal_synth.triggerAttackRelease();
            });

            
        }

        return synth;
    }

    defaultSynth = initSynth();

    $(".instrument, .osc, .vol-input, .vol-box, .synth-basefreq-input, .synth-basefreq-box, .partial-input, .partial-box, .attack-input, .decay-input, .sustain-input, .release-input, .env-box[id='attack-value'], .env-box[id='decay-value'], .env-box[id='sustain-value'], .env-box[id='release-value'], .pluck-basefreq-input, .pluck-basefreq-box, .attack-noise-input, .dampening-input, .pluck-resonance-input, .attack-noise-box, .dampening-box, .pluck-resonance-box, .metal-basefreq-input, .metal-basefreq-box, .metal-harmonicity-input, .metal-harmonicity-box, .metal-modulation-input, .metal-modulation-box, .metal-resonance-input, .metal-resonance-box, .metal-octaves-input, .metal-octaves-box, .metal-attack-input, .metal-decay-input, .metal-release-input, .metal-env-box[id='metal-attack-value'], .metal-env-box[id='metal-decay-value'], .metal-env-box[id='metal-release-value'], .kick-basefreq-input, .kick-basefreq-box, .kick-pitch-decay-input, .kick-pitch-decay-box, .kick-octaves-input, .kick-octaves-box, .kick-attack-input, .kick-decay-input, .kick-sustain-input, .kick-release-input, .kick-env-box[id='kick-attack-value'], .kick-env-box[id='kick-decay-value'], .kick-env-box[id='kick-sustain-value'], .kick-env-box[id='kick-release-value']").change(function() {
        var curr_type = $(".instrument").val();
        var curr_vol_input = $(".vol-input").val();
        var curr_vol_box = $(".vol-box").val();
        var curr_synth_freq_input = $(".synth-basefreq-input").val();
        var curr_synth_freq_box = $(".synth-basefreq-box").val();
        var curr_osc = $(".osc").val();
        var curr_partial_input = $(".partial-input").val();
        var curr_partial_box = $(".partial-box").val();
        var curr_attack_input =  parseFloat($(".attack-input").val());
        var curr_decay_input =  parseFloat($(".decay-input").val());
        var curr_sustain_input =  parseFloat($(".sustain-input").val());
        var curr_release_input =  parseFloat($(".release-input").val());
        var curr_attack_box =  parseFloat($(".env-box[id='attack-value']").val());
        var curr_decay_box =  parseFloat($(".env-box[id='decay-value']").val());
        var curr_sustain_box =  parseFloat($(".env-box[id='sustain-value']").val());
        var curr_release_box =  parseFloat($(".env-box[id='release-value']").val());

        var curr_pluck_freq_input = $(".pluck-basefreq-input").val();
        var curr_pluck_freq_box = $(".pluck-basefreq-box").val();
        var curr_attack_noise_input = $(".attack-noise-input").val();
        var curr_dampening_input = $(".dampening-input").val();
        var curr_pluck_resonance_input = $(".pluck-resonance-input").val();
        var curr_attack_noise_box = $(".attack-noise-box").val();
        var curr_dampening_box = $(".dampening-box").val();
        var curr_pluck_resonance_box = $(".pluck-resonance-box").val();

        var curr_metal_freq_input = $(".metal-basefreq-input").val();
        var curr_metal_freq_box = $(".metal-basefreq-box").val();
        var curr_metal_harmonicity_input = $(".metal-harmonicity-input").val();
        var curr_metal_harmonicity_box = $(".metal-harmonicity-box").val();
        var curr_metal_modulation_input = $(".metal-modulation-input").val();
        var curr_metal_modulation_box = $(".metal-modulation-box").val();
        var curr_metal_resonance_input = $(".metal-resonance-input").val();
        var curr_metal_resonance_box = $(".metal-resonance-box").val();
        var curr_metal_octaves_input = $(".metal-octaves-input").val();
        var curr_metal_octaves_box = $(".metal-octaves-box").val();
        var curr_metal_attack_input =  parseFloat($(".metal-attack-input").val());
        var curr_metal_decay_input =  parseFloat($(".metal-decay-input").val());
        var curr_metal_release_input =  parseFloat($(".metal-release-input").val());
        var curr_metal_attack_box =  parseFloat($(".metal-env-box[id='metal-attack-value']").val());
        var curr_metal_decay_box =  parseFloat($(".metal-env-box[id='metal-decay-value']").val());
        var curr_metal_release_box =  parseFloat($(".metal-env-box[id='metal-release-value']").val());
        
        var curr_kick_freq_input = $(".kick-basefreq-input").val();
        var curr_kick_freq_box = $(".kick-basefreq-box").val();
        var curr_kick_pitch_decay_input = $(".kick-pitch-decay-input").val();
        var curr_kick_pitch_decay_box = $(".kick-pitch-decay-box").val();
        var curr_kick_octaves_input = $(".kick-octaves-input").val();
        var curr_kick_octaves_box = $(".kick-octaves-box").val();
        var curr_kick_attack_input =  parseFloat($(".kick-attack-input").val());
        var curr_kick_decay_input =  parseFloat($(".kick-decay-input").val());
        var curr_kick_sustain_input =  parseFloat($(".kick-sustain-input").val());
        var curr_kick_release_input =  parseFloat($(".kick-release-input").val());
        var curr_kick_attack_box =  parseFloat($(".kick-env-box[id='kick-attack-value']").val());
        var curr_kick_decay_box =  parseFloat($(".kick-env-box[id='kick-decay-value']").val());
        var curr_kick_sustain_box =  parseFloat($(".kick-env-box[id='kick-sustain-value']").val());
        var curr_kick_release_box =  parseFloat($(".kick-env-box[id='kick-release-value']").val());

        if (prev_type != curr_type) { prev_type = curr_type; }
        else if (prev_vol != curr_vol_input) { $(".vol-box").val(curr_vol_input); prev_vol = curr_vol_input; }
        else if (prev_vol != curr_vol_box) { $(".vol-input").val(curr_vol_box); prev_vol = curr_vol_box; }
        else if (prev_synth_base_freq != curr_synth_freq_input) { $(".synth-basefreq-box").val(curr_synth_freq_input); prev_synth_base_freq = curr_synth_freq_input; prev_base_freq = curr_synth_freq_input; keyFreqs = bindToFreqs(qwerty_12, prev_base_freq, n); }
        else if (prev_synth_base_freq != curr_synth_freq_box) { $(".synth-basefreq-input").val(curr_synth_freq_box); prev_synth_base_freq = curr_synth_freq_box; prev_base_freq = curr_synth_freq_box; keyFreqs = bindToFreqs(qwerty_12, prev_base_freq, n); }
        else if (prev_osc != curr_osc) {console.log(('osc changed from ').concat(prev_osc).concat(' to ').concat(curr_osc)); prev_osc = curr_osc; }
        else if (prev_partial != curr_partial_input) { $(".partial-box").val(curr_partial_input); prev_partial = curr_partial_input; }
        else if (prev_partial != curr_partial_box) { $(".partial-input").val(curr_partial_box); prev_partial = curr_partial_box; }
        else if (prev_attack != curr_attack_input) { $(".env-box[id='attack-value']").val(curr_attack_input); prev_attack = curr_attack_input; }
        else if (prev_attack != curr_attack_box) { $(".attack-input").val(curr_attack_box); prev_attack = curr_attack_box; }
        else if (prev_decay != curr_decay_input) { $(".env-box[id='decay-value']").val(curr_decay_input); prev_decay = curr_decay_input; }
        else if (prev_decay != curr_decay_box) { $(".decay-input").val(curr_decay_box); prev_decay = curr_decay_box; }
        else if (prev_sustain != curr_sustain_input) { $(".env-box[id='sustain-value']").val(curr_sustain_input); prev_sustain = curr_sustain_input; }
        else if (prev_sustain != curr_sustain_box) { $(".sustain-input").val(curr_sustain_box); prev_sustain = curr_sustain_box; }
        else if (prev_release != curr_release_input) { $(".env-box[id='release-value']").val(curr_release_input); prev_release = curr_release_input; }
        else if (prev_release != curr_release_box) { $(".release-input").val(curr_release_box); prev_release = curr_release_box; }
        else if (prev_pluck_base_freq != curr_pluck_freq_input) { $(".pluck-basefreq-box").val(curr_pluck_freq_input); prev_pluck_base_freq = curr_pluck_freq_input; prev_base_freq = curr_pluck_freq_input; keyFreqs = bindToFreqs(qwerty_12, prev_base_freq, n); }
        else if (prev_pluck_base_freq != curr_pluck_freq_box) { $(".pluck-basefreq-input").val(curr_pluck_freq_box); prev_pluck_base_freq = curr_pluck_freq_box; prev_base_freq = curr_pluck_freq_box; keyFreqs = bindToFreqs(qwerty_12, prev_base_freq, n); }
        else if (prev_attack_noise != curr_attack_noise_input) { $(".attack-noise-box").val(curr_attack_noise_input); prev_attack_noise = curr_attack_noise_input; }
        else if (prev_dampening != curr_dampening_input) { $(".dampening-box").val(curr_dampening_input); prev_dampening = curr_dampening_input; }
        else if (prev_pluck_resonance != curr_pluck_resonance_input) { $(".pluck-resonance-box").val(curr_pluck_resonance_input); prev_pluck_resonance = curr_pluck_resonance_input; }
        else if (prev_attack_noise != curr_attack_noise_box) { $(".attack-noise-input").val(curr_attack_noise_box); prev_attack_noise = curr_attack_noise_box; }
        else if (prev_dampening != curr_dampening_box) { $(".dampening-input").val(curr_dampening_box); prev_dampening = curr_dampening_box; }
        else if (prev_pluck_resonance != curr_pluck_resonance_box) { $(".pluck-resonance-input").val(curr_pluck_resonance_box); prev_pluck_resonance = curr_pluck_resonance_box; }
        else if (prev_metal_base_freq != curr_metal_freq_input) { $(".metal-basefreq-box").val(curr_metal_freq_input); prev_metal_base_freq = curr_metal_freq_input; prev_base_freq = curr_metal_freq_input; keyFreqs = bindToFreqs(qwerty_12, prev_base_freq, n); }
        else if (prev_metal_base_freq != curr_metal_freq_box) { $(".metal-basefreq-input").val(curr_metal_freq_box); prev_metal_base_freq = curr_metal_freq_box; prev_base_freq = curr_metal_freq_box; keyFreqs = bindToFreqs(qwerty_12, prev_base_freq, n); }
        else if (prev_metal_harmonicity != curr_metal_harmonicity_input) { $(".metal-harmonicity-box").val(curr_metal_harmonicity_input); prev_metal_harmonicity = curr_metal_harmonicity_input; }
        else if (prev_metal_harmonicity != curr_metal_harmonicity_box) { $(".metal-harmonicity-input").val(curr_metal_harmonicity_box); prev_metal_harmonicity = curr_metal_harmonicity_box; }
        else if (prev_metal_modulation != curr_metal_modulation_input) { $(".metal-modulation-box").val(curr_metal_modulation_input); prev_metal_modulation = curr_metal_modulation_input; }
        else if (prev_metal_modulation != curr_metal_modulation_box) { $(".metal-modulation-input").val(curr_metal_modulation_box); prev_metal_modulation = curr_metal_modulation_box; }
        else if (prev_metal_resonance != curr_metal_resonance_input) { $(".metal-resonance-box").val(curr_metal_resonance_input); prev_metal_resonance = curr_metal_resonance_input; }
        else if (prev_metal_resonance != curr_metal_resonance_box) { $(".metal-resonance-input").val(curr_metal_resonance_box); prev_metal_resonance = curr_metal_resonance_box; }
        else if (prev_metal_octaves != curr_metal_octaves_input) { $(".metal-octaves-box").val(curr_metal_octaves_input); prev_metal_octaves = curr_metal_octaves_input; }
        else if (prev_metal_octaves != curr_metal_octaves_box) { $(".metal-octaves-input").val(curr_metal_octaves_box); prev_metal_octaves = curr_metal_octaves_box; }
        else if (prev_metal_attack != curr_metal_attack_input) { $(".metal-env-box[id='metal-attack-value']").val(curr_metal_attack_input); prev_metal_attack = curr_metal_attack_input; }
        else if (prev_metal_attack != curr_metal_attack_box) { $(".metal-attack-input").val(curr_metal_attack_box); prev_metal_attack = curr_metal_attack_box; }
        else if (prev_metal_decay != curr_metal_decay_input) { $(".metal-env-box[id='metal-decay-value']").val(curr_metal_decay_input); prev_metal_decay = curr_metal_decay_input; }
        else if (prev_metal_decay != curr_metal_decay_box) { $(".metal-decay-input").val(curr_metal_decay_box); prev_metal_decay = curr_metal_decay_box; }
        else if (prev_metal_release != curr_metal_release_input) { $(".metal-env-box[id='metal-release-value']").val(curr_metal_release_input); prev_metal_release = curr_metal_release_input; }
        else if (prev_metal_release != curr_metal_release_box) { $(".metal-release-input").val(curr_metal_release_box); prev_metal_release = curr_metal_release_box; }
        else if (prev_kick_base_freq != curr_kick_freq_input) { $(".kick-basefreq-box").val(curr_kick_freq_input); prev_kick_base_freq = curr_kick_freq_input; prev_base_freq = curr_kick_freq_input; keyFreqs = bindToFreqs(qwerty_12, prev_base_freq, n); }
        else if (prev_kick_base_freq != curr_kick_freq_box) { $(".kick-basefreq-input").val(curr_kick_freq_box); prev_kick_base_freq = curr_kick_freq_box; prev_base_freq = curr_kick_freq_box; keyFreqs = bindToFreqs(qwerty_12, prev_base_freq, n); }
        else if (prev_kick_pitch_decay != curr_kick_pitch_decay_input) { $(".kick-pitch-decay-box").val(curr_kick_pitch_decay_input); prev_kick_pitch_decay = curr_kick_pitch_decay_input; }
        else if (prev_kick_pitch_decay != curr_kick_pitch_decay_box) { $(".kick-pitch-decay-input").val(curr_kick_pitch_decay_box); prev_kick_pitch_decay = curr_kick_pitch_decay_box; }
        else if (prev_kick_octaves != curr_kick_octaves_input) { $(".kick-octaves-box").val(curr_kick_octaves_input); prev_kick_octaves = curr_kick_octaves_input; }
        else if (prev_kick_octaves != curr_kick_octaves_box) { $(".kick-octaves-input").val(curr_kick_octaves_box); prev_kick_octaves = curr_kick_octaves_box; }
        else if (prev_kick_attack != curr_kick_attack_input) { $(".kick-env-box[id='kick-attack-value']").val(curr_kick_attack_input); prev_kick_attack = curr_kick_attack_input; }
        else if (prev_kick_attack != curr_kick_attack_box) { $(".kick-attack-input").val(curr_kick_attack_box); prev_kick_attack = curr_kick_attack_box; }
        else if (prev_kick_decay != curr_kick_decay_input) { $(".kick-env-box[id='kick-decay-value']").val(curr_kick_decay_input); prev_kick_decay = curr_kick_decay_input; }
        else if (prev_kick_decay != curr_kick_decay_box) { $(".kick-decay-input").val(curr_kick_decay_box); prev_kick_decay = curr_kick_decay_box; }
        else if (prev_kick_sustain != curr_kick_sustain_input) { $(".kick-env-box[id='kick-sustain-value']").val(curr_kick_sustain_input); prev_kick_sustain = curr_kick_sustain_input; }
        else if (prev_kick_sustain != curr_kick_sustain_box) { $(".kick-sustain-input").val(curr_kick_sustain_box); prev_kick_sustain = curr_kick_sustain_box; }
        else if (prev_kick_release != curr_kick_release_input) { $(".kick-env-box[id='kick-release-value']").val(curr_kick_release_input); prev_kick_release = curr_kick_release_input; }
        else if (prev_kick_release != curr_kick_release_box) { $(".kick-release-input").val(curr_kick_release_box); prev_kick_release = curr_kick_release_box; }
        
        defaultSynth = initSynth();
    });

    function bindToFreqs(qwerty_keys, f, n) {
        keyFreqs = {};
        freqs = [];
        for (i=0; i<qwerty_keys.length; i++) {
          keyFreqs[i] = [];
          var keyboard = qwerty_keys[i];
          for (j=0; j<keyboard.length; j++) {
            var k = keyboard[j];
            var freq = Math.pow(2, j/n)*f;
            keyFreqs[k] = freq.toFixed(1);
            freqs.push(freq);
          }
          f /= 2;
        }
        return keyFreqs;
      }

    function playEvent(e) {
        const key = document.querySelector(`.qwerty-key[id="${e.key}"]`);
        playKey(key);
    }
    
    function playKey(key) {
        if (!key) return;
        key.classList.add('playing');
        for (keyboards=0; keyboards < keyFreqs.length; keyboards++) {
            for (i=0; i<keyFreqs[keyboards].length; i++) {
                var d = keyFreqs[i];
                if (d["key"] == key.id) {
                    var f = d["value"];
                }
            }
        }
        synth.triggerAttackRelease(f,"8n");
        setTimeout(
            function() {
                key.classList.remove('playing');
            },100);
    }

    function playDrum(key) {
        if (!key) return;
        // key.classList.add('playing');
        // synth.
    }

    function playDefaultEvent(e) {
        const key = document.querySelector(`.qwerty-key[id="${e.key}"]`);
        playDefaultKey(key);
    }

    function playDefaultKey(key) {
        if (!key) return;
        key.classList.add('playing');
        defaultSynth.triggerAttackRelease(keyFreqs[key.id],"8n");
        setTimeout(
            function() {
                key.classList.remove('playing');
            },100);
    }

    function playOtherKey(key) {
        if (!key) return;
        key.classList.add('playing');
        setTimeout(
            function() {
                key.classList.remove('playing');
            },100);
    }

    function transposeKeys(semitones) {
        new_base_freq = Math.pow(2, semitones/n)*prev_base_freq;
        prev_base_freq = new_base_freq.toFixed(1);
        keyFreqs = bindToFreqs(qwerty_12, prev_base_freq, n);
        $(".synth-basefreq-input").val(prev_base_freq);
        $(".synth-basefreq-box").val(prev_base_freq);
    }

    function pressPedal() {
        space_key.classList.add('playing');
        $(".sustain-input").val(5);
        $("#sustain-value").val(5);
        $(".release-input").val(5);
        $("#release-value").val(5);
        defaultSynth = initSynth(vol=prev_vol, osc=prev_osc, partial=prev_partial, attack=prev_attack, decay=prev_decay, sustain=prev_sustain, release=5);
    }

    function letGoPedal() {
        space_key.classList.remove('playing');
        $(".sustain-input").val(prev_sustain);
        $("#sustain-value").val(prev_sustain);
        $(".release-input").val(prev_release);
        $("#release-value").val(prev_release);
        defaultSynth = initSynth();
    }

    window.addEventListener('keydown', playDefaultEvent);

    $(".qwerty-key").on("click", function(e) {
        var key = document.querySelector(`.qwerty-key[id="${$(this).attr('id')}"]`);
        playDefaultKey(key);
    })

    $(".space-key").on("click", function(e) {
        if (space_key.classList.contains('playing')) {
            letGoPedal();
        }
        else {
            pressPedal();
        }
    })

    $("#cmd-key-1").on("click", function() {
        playOtherKey(meta_key_1);
        transposeKeys(-1);
    })

    $("#cmd-key-2").on("click", function() {
        playOtherKey(meta_key_2);
        transposeKeys(1);
    })

    $("#opt-key-1").on("click", function() {
        playOtherKey(opt_key_1);
        transposeKeys(-12);
    })

    $("#opt-key-2").on("click", function() {
        playOtherKey(opt_key_2);
        transposeKeys(12);
    })

    document.body.onkeydown = function(e) {
        if(e.key == ' ' || (e.key == ' ' && e.repeat)) {
            pressPedal();
        }
        else if(e.key == 'Meta') {
            if (e.location == 1) {
                playOtherKey(meta_key_1);
                transposeKeys(-1);
            }
            if (e.location == 2) {
                playOtherKey(meta_key_2);
                transposeKeys(1);
            }
        }
        else if(e.key == 'Alt') {
            if (e.location == 1) {
                playOtherKey(opt_key_1);
                transposeKeys(-12);
            }
            if (e.location == 2) {
                playOtherKey(opt_key_2);
                transposeKeys(12);
            }
        }
    }
    
    document.body.onkeyup = function(e) {
        if(e.key == ' ') {
            letGoPedal();
        }
    }

    $(document).on("click", ".daw-track", function() {
        $(".track-selected").removeClass("track-selected");
        $(this).addClass("track-selected");
    });

    $(document).on("click", ".floating-record-btn", function() {
        $(this).addClass("disabled");
        $(".floating-stop-btn").removeClass("disabled");
        $(".daw-track-new").trigger("click");
        $(".track-selected .full-record-btn").trigger("click");
    });

    $(document).on("click", ".floating-stop-btn", function() {
        $(this).addClass("disabled");
        $(".floating-record-btn").removeClass("disabled");
        $(".floating-play-btn").removeClass("disabled");
        $(".floating-loop-btn").removeClass("disabled");
        $(".track-selected .full-stop-btn").trigger("click");
    });

    $(document).on("click", ".floating-play-btn", function() {
        $(".floating-play-btn").addClass("disabled");
        $(".floating-pause-btn").removeClass("disabled");
        $(".full-play-btn").trigger("click");
    });

    $(document).on("click", ".floating-pause-btn", function() {
        $(".floating-pause-btn").addClass("disabled");
        $(".floating-play-btn").removeClass("disabled");
        $(".full-pause-btn").trigger("click");
    });

    $(document).on("click", ".floating-loop-btn", function() {
        $(".full-loop-btn").trigger("click");
        if (document.querySelector('.floating-loop-btn').classList.contains('toggled')) {
            $(".floating-loop-btn").removeClass("toggled");
        }
        else {
            $(".floating-loop-btn").addClass("toggled");
        }
    });

    $(document).on("click", ".full-record-btn", function() {
        $(".track-selected").removeClass("track-selected");
        $(this).closest(".daw-track").addClass("track-selected");
        $(this).addClass("disabled");
        var closest_stop_btn = $(this).next(".full-stop-btn");
        closest_stop_btn.removeClass("disabled");

        const audio = document.querySelector(".track-selected > audio");
        const actx = Tone.context;
        const dest = actx.createMediaStreamDestination();
        const recorder = new MediaRecorder(dest.stream);

        defaultSynth.connect(dest);
        const chunks = [];
        recorder.start();
        recorder.ondataavailable = evt => chunks.push(evt.data);

        closest_stop_btn.on("click", function() {
            $(this).closest(".daw-track-circle-btns").hide();
            audio.classList.remove("hidden");
            audio.classList.add("replaced");
            $(".full-play-btn").removeClass("disabled");
            $(".full-loop-btn").removeClass("disabled");
            
            recorder.stop();
            recorder.onstop = evt => {
                let blob = new Blob(chunks, {type: 'audio/ogg; codecs=opus'});
                audio.src = URL.createObjectURL(blob);
            }

            (function(Peaks) {
                const options = {
                    zoomview: {
                        container: document.querySelector(".track-selected > .zoomview-container")
                    },
                    overview: {
                        container: document.querySelector(".track-selected > .zoomview-container > .overview-container")
                    },
                    mediaElement: document.querySelector(".track-selected > audio"),
                    webAudio: {
                        audioContext: new AudioContext()
                    }
                };
                console.log(options['zoomview']['container']);
                console.log(options['overview']['container']);
                console.log(options['mediaElement']);
                Peaks.init(options, function(err, peaks) {
                    // Do something when the waveform is displayed and ready
                });
            })(peaks);
        });
    });

    $(document).on("click", ".full-play-btn", function() {
        $('.full-play-btn').addClass('disabled');
        $('.full-pause-btn').removeClass('disabled');
        const audios = document.querySelectorAll(".replaced");
        audios.forEach(audio => {
            audio.play(); 
        });
    });

    $(document).on("click", ".full-pause-btn", function() {
        $('.full-pause-btn').addClass('disabled');
        $('.full-play-btn').removeClass('disabled');
        const audios = document.querySelectorAll(".replaced");
        audios.forEach(audio => {
            audio.pause(); 
        });
    });

    $(document).on("click", ".full-loop-btn", function() {
        if (document.querySelector('.full-loop-btn').classList.contains('toggled')) {
            $('.full-loop-btn').removeClass('toggled');
            const audios = document.querySelectorAll(".replaced");
            audios.forEach(audio => {
                audio.loop = false; 
            });
        }
        else {
            $('.full-loop-btn').addClass('toggled');
            const audios = document.querySelectorAll(".replaced");
            audios.forEach(audio => {
                audio.loop = true; 
            });
        }
    });

    var tracks = 0;
    $(document).on("click", ".daw-track-new", function() {
        tracks++;
        tracks_s = tracks.toString();
        $(".track-selected").removeClass("track-selected");
        $('<div class="daw-track track-selected" id="track-'.concat(tracks_s).concat('"><div class="daw-track-left"><div class="daw-track-left-top"><div class="daw-track-remove" id="remove-track-'.concat(tracks_s).concat('">x</div><input type="text" class="daw-track-name"></div><div class="daw-track-vol"><p>–</p><input type="range" class="daw-track-vol-slider"><p>+</p></div><div class="daw-track-pan"><p>L</p><input type="range" class="daw-track-pan-slider"><p>R</p></div><div class="daw-track-mute-solo"><div class="daw-track-mute">M</div><div class="daw-track-solo">S</div></div></div><div class="daw-track-right"><div class="daw-track-circle-btns"><div class="daw-track-circle-btn full-record-btn"><div class="daw-track-record"></div></div><div class="daw-track-circle-btn full-stop-btn disabled"><div class="daw-track-stop"></div></div></div></div><div class="zoomview-container" id="zoomview-'.concat(tracks_s).concat('"><div class="overview-container" id="overview-'.concat(tracks_s).concat('"></div></div><audio controls class="daw-track-audio hidden" id="audio-'.concat(tracks_s).concat('"></audio></div>')))))).appendTo("#daw");
    });

    $(document).on("click", ".daw-track-remove", function() {
        $(this).closest('.daw-track').remove();
    });
});

function getKeyByFreq(object, freq) {
    return Object.keys(object).find(key => object[key] == freq);
}