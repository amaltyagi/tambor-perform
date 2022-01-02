$(document).ready(function() {
    const qwerty_12 = ["q2w3er5t6y7ui9o0p[=]"];
    var synth_base_freq = 261.6;
    var pluck_base_freq = 40;
    var crash_cymbal_base_freq = 200;
    var ride_cymbal_base_freq = 200;
    var kick_base_freq = 30;
    var low_tom_base_freq = 30;
    var mid_tom_base_freq = 30;
    var high_tom_base_freq = 30;
    var base_freq = synth_base_freq;
    var n = 12;
    var keyFreqs = bindToFreqs(qwerty_12, base_freq, n);
    var sounds = [Tone.Synth, Tone.MonoSynth, Tone.AMSynth, Tone.FMSynth];

    // synth initializations
    $(".synth-vol-box").val(-24);
    $(".synth-vol-input").val(-24);
    $(".synth-basefreq-input").val(synth_base_freq);
    $(".synth-basefreq-box").val(synth_base_freq);
    $(".sound").val(0);
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
    $(".crash-cymbal-basefreq-input").val(crash_cymbal_base_freq);
    $(".crash-cymbal-basefreq-box").val(crash_cymbal_base_freq);
    $(".crash-cymbal-attack-input").val(.01);
    $(".crash-cymbal-decay-input").val(.5);
    $(".crash-cymbal-release-input").val(2);
    $("#crash-cymbal-attack-value").val($(".crash-cymbal-attack-input").val());
    $("#crash-cymbal-decay-value").val($(".crash-cymbal-decay-input").val());
    $("#crash-cymbal-release-value").val($(".crash-cymbal-release-input").val());
    $(".crash-cymbal-harmonicity-input").val(5.1);
    $(".crash-cymbal-modulation-input").val(32);
    $(".crash-cymbal-resonance-input").val(4000);
    $(".crash-cymbal-octaves-input").val(1.5);
    $(".crash-cymbal-harmonicity-box").val($(".crash-cymbal-harmonicity-input").val());
    $(".crash-cymbal-modulation-box").val($(".crash-cymbal-modulation-input").val());
    $(".crash-cymbal-resonance-box").val($(".crash-cymbal-resonance-input").val());
    $(".crash-cymbal-octaves-box").val($(".crash-cymbal-octaves-input").val());
    $(".ride-cymbal-basefreq-input").val(ride_cymbal_base_freq);
    $(".ride-cymbal-basefreq-box").val(ride_cymbal_base_freq);
    $(".ride-cymbal-attack-input").val(.01);
    $(".ride-cymbal-decay-input").val(.5);
    $(".ride-cymbal-release-input").val(2);
    $("#ride-cymbal-attack-value").val($(".ride-cymbal-attack-input").val());
    $("#ride-cymbal-decay-value").val($(".ride-cymbal-decay-input").val());
    $("#ride-cymbal-release-value").val($(".ride-cymbal-release-input").val());
    $(".ride-cymbal-harmonicity-input").val(5.1);
    $(".ride-cymbal-modulation-input").val(32);
    $(".ride-cymbal-resonance-input").val(4000);
    $(".ride-cymbal-octaves-input").val(1.5);
    $(".ride-cymbal-harmonicity-box").val($(".ride-cymbal-harmonicity-input").val());
    $(".ride-cymbal-modulation-box").val($(".ride-cymbal-modulation-input").val());
    $(".ride-cymbal-resonance-box").val($(".ride-cymbal-resonance-input").val());
    $(".ride-cymbal-octaves-box").val($(".ride-cymbal-octaves-input").val());

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
    $(".low-tom-basefreq-input").val(low_tom_base_freq);
    $(".low-tom-basefreq-box").val(low_tom_base_freq);
    $(".low-tom-attack-input").val(.01);
    $(".low-tom-decay-input").val(.5);
    $(".low-tom-sustain-input").val(.5);
    $(".low-tom-release-input").val(2);
    $("#low-tom-attack-value").val($(".low-tom-attack-input").val());
    $("#low-tom-decay-value").val($(".low-tom-decay-input").val());
    $("#low-tom-sustain-value").val($(".low-tom-decay-input").val());
    $("#low-tom-release-value").val($(".low-tom-sustain-input").val());
    $(".low-tom-pitch-decay-input").val(0.05);
    $(".low-tom-octaves-input").val(10);
    $(".low-tom-pitch-decay-box").val($(".low-tom-pitch-decay-input").val());
    $(".low-tom-octaves-box").val($(".low-tom-octaves-input").val());
    $(".mid-tom-basefreq-input").val(mid_tom_base_freq);
    $(".mid-tom-basefreq-box").val(mid_tom_base_freq);
    $(".mid-tom-attack-input").val(.01);
    $(".mid-tom-decay-input").val(.5);
    $(".mid-tom-sustain-input").val(.5);
    $(".mid-tom-release-input").val(2);
    $("#mid-tom-attack-value").val($(".mid-tom-attack-input").val());
    $("#mid-tom-decay-value").val($(".mid-tom-decay-input").val());
    $("#mid-tom-sustain-value").val($(".mid-tom-decay-input").val());
    $("#mid-tom-release-value").val($(".mid-tom-sustain-input").val());
    $(".mid-tom-pitch-decay-input").val(0.05);
    $(".mid-tom-octaves-input").val(10);
    $(".mid-tom-pitch-decay-box").val($(".mid-tom-pitch-decay-input").val());
    $(".mid-tom-octaves-box").val($(".mid-tom-octaves-input").val());
    $(".high-tom-basefreq-input").val(high_tom_base_freq);
    $(".high-tom-basefreq-box").val(high_tom_base_freq);
    $(".high-tom-attack-input").val(.01);
    $(".high-tom-decay-input").val(.5);
    $(".high-tom-sustain-input").val(.5);
    $(".high-tom-release-input").val(2);
    $("#high-tom-attack-value").val($(".high-tom-attack-input").val());
    $("#high-tom-decay-value").val($(".high-tom-decay-input").val());
    $("#high-tom-sustain-value").val($(".high-tom-decay-input").val());
    $("#high-tom-release-value").val($(".high-tom-sustain-input").val());
    $(".high-tom-pitch-decay-input").val(0.05);
    $(".high-tom-octaves-input").val(10);
    $(".high-tom-pitch-decay-box").val($(".high-tom-pitch-decay-input").val());
    $(".high-tom-octaves-box").val($(".high-tom-octaves-input").val());

    // general settings
    var prev_type = $(".instrument").val();
    
    // synth settings
    var prev_vol = $(".synth-vol-input").val();
    var prev_base_freq = $(".synth-basefreq-input").val();
    var prev_synth_base_freq = $(".synth-basefreq-input").val();
    var prev_sound = $(".sound").val();
    var prev_osc = $(".osc").val();
    var prev_partial = $(".partial-input").val();
    var prev_attack =  parseFloat($(".attack-input").val());
    var prev_attack_curve = "linear";
    var prev_decay =  parseFloat($(".decay-input").val());
    var prev_decay_curve = "linear";
    var prev_sustain =  parseFloat($(".sustain-input").val());
    var prev_release =  parseFloat($(".release-input").val());
    var prev_release_curve = "exponential";

    // string settings
    var prev_pluck_base_freq = $(".pluck-basefreq-input").val();
    var prev_attack_noise = $(".attack-noise-input").val();
    var prev_dampening = $(".dampening-input").val();
    var prev_pluck_resonance = $(".pluck-resonance-input").val();

    // metal settings
    var prev_crash_cymbal_base_freq = $(".crash-cymbal-basefreq-input").val();
    var prev_crash_cymbal_harmonicity = $(".crash-cymbal-harmonicity-input").val();
    var prev_crash_cymbal_modulation = $(".crash-cymbal-modulation-input").val();
    var prev_crash_cymbal_resonance = $(".crash-cymbal-resonance-input").val();
    var prev_crash_cymbal_octaves = $(".crash-cymbal-octaves-input").val();
    var prev_crash_cymbal_attack =  parseFloat($(".crash-cymbal-attack-input").val());
    var prev_crash_cymbal_decay =  parseFloat($(".crash-cymbal-decay-input").val());
    var prev_crash_cymbal_release =  parseFloat($(".crash-cymbal-release-input").val());
    var prev_ride_cymbal_base_freq = $(".ride-cymbal-basefreq-input").val();
    var prev_ride_cymbal_harmonicity = $(".ride-cymbal-harmonicity-input").val();
    var prev_ride_cymbal_modulation = $(".ride-cymbal-modulation-input").val();
    var prev_ride_cymbal_resonance = $(".ride-cymbal-resonance-input").val();
    var prev_ride_cymbal_octaves = $(".ride-cymbal-octaves-input").val();
    var prev_ride_cymbal_attack =  parseFloat($(".ride-cymbal-attack-input").val());
    var prev_ride_cymbal_decay =  parseFloat($(".ride-cymbal-decay-input").val());
    var prev_ride_cymbal_release =  parseFloat($(".ride-cymbal-release-input").val());
    
    // kick settings
    var prev_kick_base_freq = $(".kick-basefreq-input").val();
    var prev_kick_pitch_decay = $(".kick-pitch-decay-input").val();
    var prev_kick_octaves = $(".kick-octaves-input").val();
    var prev_kick_attack =  parseFloat($(".kick-attack-input").val());
    var prev_kick_decay =  parseFloat($(".kick-decay-input").val());
    var prev_kick_sustain =  parseFloat($(".kick-sustain-input").val());
    var prev_kick_release =  parseFloat($(".kick-release-input").val());
    var prev_low_tom_base_freq = $(".low-tom-basefreq-input").val();
    var prev_low_tom_pitch_decay = $(".low-tom-pitch-decay-input").val();
    var prev_low_tom_octaves = $(".low-tom-octaves-input").val();
    var prev_low_tom_attack =  parseFloat($(".low-tom-attack-input").val());
    var prev_low_tom_decay =  parseFloat($(".low-tom-decay-input").val());
    var prev_low_tom_sustain =  parseFloat($(".low-tom-sustain-input").val());
    var prev_low_tom_release =  parseFloat($(".low-tom-release-input").val());
    var prev_mid_tom_base_freq = $(".mid-tom-basefreq-input").val();
    var prev_mid_tom_pitch_decay = $(".mid-tom-pitch-decay-input").val();
    var prev_mid_tom_octaves = $(".mid-tom-octaves-input").val();
    var prev_mid_tom_attack =  parseFloat($(".mid-tom-attack-input").val());
    var prev_mid_tom_decay =  parseFloat($(".mid-tom-decay-input").val());
    var prev_mid_tom_sustain =  parseFloat($(".mid-tom-sustain-input").val());
    var prev_mid_tom_release =  parseFloat($(".mid-tom-release-input").val());
    var prev_high_tom_base_freq = $(".high-tom-basefreq-input").val();
    var prev_high_tom_pitch_decay = $(".high-tom-pitch-decay-input").val();
    var prev_high_tom_octaves = $(".high-tom-octaves-input").val();
    var prev_high_tom_attack =  parseFloat($(".high-tom-attack-input").val());
    var prev_high_tom_decay =  parseFloat($(".high-tom-decay-input").val());
    var prev_high_tom_sustain =  parseFloat($(".high-tom-sustain-input").val());
    var prev_high_tom_release =  parseFloat($(".high-tom-release-input").val());

    const space_key = document.getElementById("space-key");
    const meta_key_1 = document.getElementById("cmd-key-1");
    const meta_key_2 = document.getElementById("cmd-key-2");
    const opt_key_1 = document.getElementById("opt-key-1");
    const opt_key_2 = document.getElementById("opt-key-2");

    function initSynth(type=prev_type, vol=prev_vol, synth_base_freq=prev_synth_base_freq, sound=prev_sound, osc=prev_osc, partial=prev_partial, attack=prev_attack, attack_curve=prev_attack_curve, decay=prev_decay, decay_curve=prev_decay_curve, sustain=prev_sustain, release=prev_release, release_curve=prev_release_curve, pluck_base_freq=prev_pluck_base_freq, attack_noise=prev_attack_noise, dampening=prev_dampening, pluck_resonance=prev_pluck_resonance, crash_cymbal_base_freq=prev_crash_cymbal_base_freq, crash_cymbal_harmonicity=prev_crash_cymbal_harmonicity, crash_cymbal_modulation=prev_crash_cymbal_modulation, crash_cymbal_resonance=prev_crash_cymbal_resonance, crash_cymbal_octaves=prev_crash_cymbal_octaves, crash_cymbal_attack=prev_crash_cymbal_attack, crash_cymbal_decay=prev_crash_cymbal_decay, crash_cymbal_release=prev_crash_cymbal_release, ride_cymbal_base_freq=prev_ride_cymbal_base_freq, ride_cymbal_harmonicity=prev_ride_cymbal_harmonicity, ride_cymbal_modulation=prev_ride_cymbal_modulation, ride_cymbal_resonance=prev_ride_cymbal_resonance, ride_cymbal_octaves=prev_ride_cymbal_octaves, ride_cymbal_attack=prev_ride_cymbal_attack, ride_cymbal_decay=prev_ride_cymbal_decay, ride_cymbal_release=prev_ride_cymbal_release, kick_base_freq=prev_kick_base_freq, kick_pitch_decay=prev_kick_pitch_decay, kick_octaves=prev_kick_octaves, kick_attack=prev_kick_attack, kick_decay=prev_kick_decay, kick_sustain=prev_kick_sustain, kick_release=prev_kick_release, low_tom_base_freq=prev_low_tom_base_freq, low_tom_pitch_decay=prev_low_tom_pitch_decay, low_tom_octaves=prev_low_tom_octaves, low_tom_attack=prev_low_tom_attack, low_tom_decay=prev_low_tom_decay, low_tom_sustain=prev_low_tom_sustain, low_tom_release=prev_low_tom_release, mid_tom_base_freq=prev_mid_tom_base_freq, mid_tom_pitch_decay=prev_mid_tom_pitch_decay, mid_tom_octaves=prev_mid_tom_octaves, mid_tom_attack=prev_mid_tom_attack, mid_tom_decay=prev_mid_tom_decay, mid_tom_sustain=prev_mid_tom_sustain, mid_tom_release=prev_mid_tom_release, high_tom_base_freq=prev_high_tom_base_freq, high_tom_pitch_decay=prev_high_tom_pitch_decay, high_tom_octaves=prev_high_tom_octaves, high_tom_attack=prev_high_tom_attack, high_tom_decay=prev_high_tom_decay, high_tom_sustain=prev_high_tom_sustain, high_tom_release=prev_high_tom_release) {
        if (type == "Keyboard") {
            bindToFreqs(qwerty_12, base_freq, n);
            $(".qwerty").show();
            $(".synth-vol").show();
            $(".synth-basefreq").show();
            $(".synth-env").show();
            $(".pluck-vol").hide();
            $(".pluck-basefreq").hide();
            $(".pluck-env").hide();
            $(".drumkit-div").hide();
            base_freq = synth_base_freq;
            keyFreqs = bindToFreqs(qwerty_12, base_freq, n);
            var synth = new Tone.PolySynth(6, sounds[sound], {
                volume: vol,
                oscillator: {
                    type: osc.toLowerCase().concat(partial.toString())
                },
                envelope: {
                    attack: attack,
                    attackCurve: attack_curve,
                    decay: attack + decay,
                    decayCurve: decay_curve,
                    sustain: attack + decay + sustain,
                    release: attack + decay + sustain + release,
                    releaseCurve: release_curve,
                },
            }).toMaster();
        }

        else if (type == "String") {
            bindToFreqs(qwerty_12, base_freq, n);
            $(".qwerty").show();
            $(".synth-vol").hide();
            $(".synth-basefreq").hide();
            $(".synth-env").hide();
            $(".pluck-vol").show();
            $(".pluck-basefreq").show();
            $(".pluck-env").show();
            $(".drumkit-div").hide();
            base_freq = pluck_base_freq;
            keyFreqs = bindToFreqs(qwerty_12, base_freq, n);
            var synth = new Tone.PluckSynth({ // freq range: 20-130Hz
                attackNoise: attack_noise,
                dampening: dampening,
                resonance: pluck_resonance,
            }).toMaster();
        }

        // else if (type == "Cymbal") {
        //     bindToFreqs(qwerty_12, base_freq, n);
        //     $(".qwerty").show();
        //     $(".synth-env").hide();
        //     $(".synth-basefreq").hide();
        //     $(".pluck-env").hide();
        //     $(".pluck-basefreq").hide();
        //     $(".metal-basefreq").show();
        //     $(".metal-env").show();
        //     $(".kick-env").hide();
        //     $(".drumkit-div").hide();
        //     base_freq = metal_base_freq;
        //     keyFreqs = bindToFreqs(qwerty_12, base_freq, n);
        //     var synth = new Tone.MetalSynth({
        //         volume: vol,
        //         envelope: {
        //             attack: metal_attack,
        //             decay: metal_attack + metal_decay,
        //             release: metal_attack + metal_decay + metal_release,
        //         },
        //         harmonicity: metal_harmonicity,
        //         modulationIndex: metal_modulation,
        //         resonance: metal_resonance,
        //         octaves: metal_octaves,
        //     }).toMaster();
        // }

        // else if (type == "Kick") {
        //     bindToFreqs(qwerty_12, base_freq, n);
        //     $(".qwerty").show();
        //     $(".synth-env").hide();
        //     $(".synth-basefreq").hide();
        //     $(".pluck-env").hide();
        //     $(".pluck-basefreq").hide();
        //     $(".metal-basefreq").hide();
        //     $(".metal-env").hide();
        //     $(".kick-basefreq").show();
        //     $(".kick-env").show();
        //     $(".drumkit-div").hide();
        //     base_freq = kick_base_freq;
        //     keyFreqs = bindToFreqs(qwerty_12, base_freq, n);
        //     var synth = new Tone.MembraneSynth({
        //         volume: vol,
        //         envelope: {
        //             attack: kick_attack,
        //             decay: kick_attack + kick_decay,
        //             sustain: kick_attack + kick_decay + kick_sustain,
        //             release: kick_attack + kick_decay + kick_sustain + kick_release,
        //         },
        //         pitchDecay: kick_pitch_decay,
        //         octaves: kick_octaves,
        //     }).toMaster();
        // }

        else if (type == "Drumkit") {
            // bindToDrums(qwerty_drumkit);
            $(".qwerty").hide();
            $(".synth-vol").hide();
            $(".synth-basefreq").hide();
            $(".synth-env").hide();
            $(".pluck-vol").hide();
            $(".pluck-basefreq").hide();
            $(".pluck-env").hide();
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
                    attack: low_tom_attack,
                    decay: low_tom_attack + low_tom_decay,
                    sustain: low_tom_attack + low_tom_decay + low_tom_sustain,
                    release: low_tom_attack + low_tom_decay + low_tom_sustain + low_tom_release,
                },
                pitchDecay: low_tom_pitch_decay,
                octaves: low_tom_octaves,
            }).toMaster();

            var mid_tom_synth = new Tone.MembraneSynth({
                volume: vol,
                envelope: {
                    attack: mid_tom_attack,
                    decay: mid_tom_attack + mid_tom_decay,
                    sustain: mid_tom_attack + mid_tom_decay + mid_tom_sustain,
                    release: mid_tom_attack + mid_tom_decay + mid_tom_sustain + mid_tom_release,
                },
                pitchDecay: mid_tom_pitch_decay,
                octaves: mid_tom_octaves,
            }).toMaster();

            var high_tom_synth = new Tone.MembraneSynth({
                volume: vol,
                envelope: {
                    attack: high_tom_attack,
                    decay: high_tom_attack + high_tom_decay,
                    sustain: high_tom_attack + high_tom_decay + high_tom_sustain,
                    release: high_tom_attack + high_tom_decay + high_tom_sustain + high_tom_release,
                },
                pitchDecay: high_tom_pitch_decay,
                octaves: high_tom_octaves,
            }).toMaster();

            var ride_cymbal_synth = new Tone.MetalSynth({
                volume: vol,
                envelope: {
                    attack: ride_cymbal_attack,
                    decay: ride_cymbal_attack + ride_cymbal_decay,
                    release: ride_cymbal_attack + ride_cymbal_decay + ride_cymbal_release,
                },
                harmonicity: ride_cymbal_harmonicity,
                modulationIndex: ride_cymbal_modulation,
                resonance: ride_cymbal_resonance,
                octaves: ride_cymbal_octaves,
            }).toMaster();

            var crash_cymbal_synth = new Tone.MetalSynth({
                volume: vol,
                envelope: {
                    attack: crash_cymbal_attack,
                    decay: crash_cymbal_attack + crash_cymbal_decay,
                    release: crash_cymbal_attack + crash_cymbal_decay + crash_cymbal_release,
                },
                harmonicity: crash_cymbal_harmonicity,
                modulationIndex: crash_cymbal_modulation,
                resonance: crash_cymbal_resonance,
                octaves: crash_cymbal_octaves,
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
                crash_cymbal_synth.triggerAttackRelease();
            });
        }

        return synth;
    }

    defaultSynth = initSynth();

    function initPedalSynth(type=prev_type, vol=prev_vol, synth_base_freq=prev_synth_base_freq, sound=prev_sound, osc=prev_osc, partial=prev_partial, attack=prev_attack, attack_curve=prev_attack_curve, decay=prev_decay, decay_curve=prev_decay_curve, sustain=prev_sustain, release=5, release_curve=prev_release_curve, pluck_base_freq=prev_pluck_base_freq, attack_noise=prev_attack_noise, dampening=prev_dampening, pluck_resonance=prev_pluck_resonance, kick_base_freq=prev_kick_base_freq, kick_pitch_decay=prev_kick_pitch_decay, kick_octaves=prev_kick_octaves, kick_attack=prev_kick_attack, kick_decay=prev_kick_decay, kick_sustain=prev_kick_sustain, kick_release=prev_kick_release) {
        if (type == "Keyboard") {
            var synth = new Tone.PolySynth(6, sounds[sound], {
                volume: vol,
                oscillator: {
                    type: osc.toLowerCase().concat(partial.toString())
                },
                envelope: {
                    attack: attack,
                    attackCurve: attack_curve,
                    decay: attack + decay,
                    decayCurve: decay_curve,
                    sustain: attack + decay + sustain,
                    release: attack + decay + sustain + release,
                    releaseCurve: release_curve,
                },
            }).toMaster();
        }

        return synth;
    }

    $(".instrument, .sound, .osc, .synth-vol-input, .synth-vol-box, .synth-basefreq-input, .synth-basefreq-box, .partial-input, .partial-box, .attack-input, .decay-input, .sustain-input, .release-input, .env-box[id='attack-value'], .env-box[id='decay-value'], .env-box[id='sustain-value'], .env-box[id='release-value'], .pluck-basefreq-input, .pluck-basefreq-box, .attack-noise-input, .dampening-input, .pluck-resonance-input, .attack-noise-box, .dampening-box, .pluck-resonance-box, .metal-basefreq-input, .metal-basefreq-box, .metal-harmonicity-input, .metal-harmonicity-box, .metal-modulation-input, .metal-modulation-box, .metal-resonance-input, .metal-resonance-box, .metal-octaves-input, .metal-octaves-box, .metal-attack-input, .metal-decay-input, .metal-release-input, .metal-env-box[id='metal-attack-value'], .metal-env-box[id='metal-decay-value'], .metal-env-box[id='metal-release-value'], .kick-basefreq-input, .kick-basefreq-box, .kick-pitch-decay-input, .kick-pitch-decay-box, .kick-octaves-input, .kick-octaves-box, .kick-attack-input, .kick-decay-input, .kick-sustain-input, .kick-release-input, .kick-env-box[id='kick-attack-value'], .kick-env-box[id='kick-decay-value'], .kick-env-box[id='kick-sustain-value'], .kick-env-box[id='kick-release-value']").change(function() {
        var curr_type = $(".instrument").val();
        var curr_vol_input = $(".synth-vol-input").val();
        var curr_vol_box = $(".synth-vol-box").val();
        var curr_synth_freq_input = $(".synth-basefreq-input").val();
        var curr_synth_freq_box = $(".synth-basefreq-box").val();
        var curr_sound = $(".sound").val();
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

        var curr_crash_cymbal_freq_input = $(".crash-cymbal-basefreq-input").val();
        var curr_crash_cymbal_freq_box = $(".crash-cymbal-basefreq-box").val();
        var curr_crash_cymbal_harmonicity_input = $(".crash-cymbal-harmonicity-input").val();
        var curr_crash_cymbal_harmonicity_box = $(".crash-cymbal-harmonicity-box").val();
        var curr_crash_cymbal_modulation_input = $(".crash-cymbal-modulation-input").val();
        var curr_crash_cymbal_modulation_box = $(".crash-cymbal-modulation-box").val();
        var curr_crash_cymbal_resonance_input = $(".crash-cymbal-resonance-input").val();
        var curr_crash_cymbal_resonance_box = $(".crash-cymbal-resonance-box").val();
        var curr_crash_cymbal_octaves_input = $(".crash-cymbal-octaves-input").val();
        var curr_crash_cymbal_octaves_box = $(".crash-cymbal-octaves-box").val();
        var curr_crash_cymbal_attack_input =  parseFloat($(".crash-cymbal-attack-input").val());
        var curr_crash_cymbal_decay_input =  parseFloat($(".crash-cymbal-decay-input").val());
        var curr_crash_cymbal_release_input =  parseFloat($(".crash-cymbal-release-input").val());
        var curr_crash_cymbal_attack_box =  parseFloat($(".crash-cymbal-env-box[id='crash-cymbal-attack-value']").val());
        var curr_crash_cymbal_decay_box =  parseFloat($(".crash-cymbal-env-box[id='crash-cymbal-decay-value']").val());
        var curr_crash_cymbal_release_box =  parseFloat($(".crash-cymbal-env-box[id='crash-cymbal-release-value']").val());
        var curr_ride_cymbal_freq_input = $(".ride-cymbal-basefreq-input").val();
        var curr_ride_cymbal_freq_box = $(".ride-cymbal-basefreq-box").val();
        var curr_ride_cymbal_harmonicity_input = $(".ride-cymbal-harmonicity-input").val();
        var curr_ride_cymbal_harmonicity_box = $(".ride-cymbal-harmonicity-box").val();
        var curr_ride_cymbal_modulation_input = $(".ride-cymbal-modulation-input").val();
        var curr_ride_cymbal_modulation_box = $(".ride-cymbal-modulation-box").val();
        var curr_ride_cymbal_resonance_input = $(".ride-cymbal-resonance-input").val();
        var curr_ride_cymbal_resonance_box = $(".ride-cymbal-resonance-box").val();
        var curr_ride_cymbal_octaves_input = $(".ride-cymbal-octaves-input").val();
        var curr_ride_cymbal_octaves_box = $(".ride-cymbal-octaves-box").val();
        var curr_ride_cymbal_attack_input =  parseFloat($(".ride-cymbal-attack-input").val());
        var curr_ride_cymbal_decay_input =  parseFloat($(".ride-cymbal-decay-input").val());
        var curr_ride_cymbal_release_input =  parseFloat($(".ride-cymbal-release-input").val());
        var curr_ride_cymbal_attack_box =  parseFloat($(".ride-cymbal-env-box[id='ride-cymbal-attack-value']").val());
        var curr_ride_cymbal_decay_box =  parseFloat($(".ride-cymbal-env-box[id='ride-cymbal-decay-value']").val());
        var curr_ride_cymbal_release_box =  parseFloat($(".ride-cymbal-env-box[id='ride-cymbal-release-value']").val());
        
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
        var curr_low_tom_freq_input = $(".low-tom-basefreq-input").val();
        var curr_low_tom_freq_box = $(".low-tom-basefreq-box").val();
        var curr_low_tom_pitch_decay_input = $(".low-tom-pitch-decay-input").val();
        var curr_low_tom_pitch_decay_box = $(".low-tom-pitch-decay-box").val();
        var curr_low_tom_octaves_input = $(".low-tom-octaves-input").val();
        var curr_low_tom_octaves_box = $(".low-tom-octaves-box").val();
        var curr_low_tom_attack_input =  parseFloat($(".low-tom-attack-input").val());
        var curr_low_tom_decay_input =  parseFloat($(".low-tom-decay-input").val());
        var curr_low_tom_sustain_input =  parseFloat($(".low-tom-sustain-input").val());
        var curr_low_tom_release_input =  parseFloat($(".low-tom-release-input").val());
        var curr_low_tom_attack_box =  parseFloat($(".low-tom-env-box[id='low-tom-attack-value']").val());
        var curr_low_tom_decay_box =  parseFloat($(".low-tom-env-box[id='low-tom-decay-value']").val());
        var curr_low_tom_sustain_box =  parseFloat($(".low-tom-env-box[id='low-tom-sustain-value']").val());
        var curr_low_tom_release_box =  parseFloat($(".low-tom-env-box[id='low-tom-release-value']").val());
        var curr_mid_tom_freq_input = $(".mid-tom-basefreq-input").val();
        var curr_mid_tom_freq_box = $(".mid-tom-basefreq-box").val();
        var curr_mid_tom_pitch_decay_input = $(".mid-tom-pitch-decay-input").val();
        var curr_mid_tom_pitch_decay_box = $(".mid-tom-pitch-decay-box").val();
        var curr_mid_tom_octaves_input = $(".mid-tom-octaves-input").val();
        var curr_mid_tom_octaves_box = $(".mid-tom-octaves-box").val();
        var curr_mid_tom_attack_input =  parseFloat($(".mid-tom-attack-input").val());
        var curr_mid_tom_decay_input =  parseFloat($(".mid-tom-decay-input").val());
        var curr_mid_tom_sustain_input =  parseFloat($(".mid-tom-sustain-input").val());
        var curr_mid_tom_release_input =  parseFloat($(".mid-tom-release-input").val());
        var curr_mid_tom_attack_box =  parseFloat($(".mid-tom-env-box[id='mid-tom-attack-value']").val());
        var curr_mid_tom_decay_box =  parseFloat($(".mid-tom-env-box[id='mid-tom-decay-value']").val());
        var curr_mid_tom_sustain_box =  parseFloat($(".mid-tom-env-box[id='mid-tom-sustain-value']").val());
        var curr_mid_tom_release_box =  parseFloat($(".mid-tom-env-box[id='mid-tom-release-value']").val());
        var curr_high_tom_freq_input = $(".high-tom-basefreq-input").val();
        var curr_high_tom_freq_box = $(".high-tom-basefreq-box").val();
        var curr_high_tom_pitch_decay_input = $(".high-tom-pitch-decay-input").val();
        var curr_high_tom_pitch_decay_box = $(".high-tom-pitch-decay-box").val();
        var curr_high_tom_octaves_input = $(".high-tom-octaves-input").val();
        var curr_high_tom_octaves_box = $(".high-tom-octaves-box").val();
        var curr_high_tom_attack_input =  parseFloat($(".high-tom-attack-input").val());
        var curr_high_tom_decay_input =  parseFloat($(".high-tom-decay-input").val());
        var curr_high_tom_sustain_input =  parseFloat($(".high-tom-sustain-input").val());
        var curr_high_tom_release_input =  parseFloat($(".high-tom-release-input").val());
        var curr_high_tom_attack_box =  parseFloat($(".high-tom-env-box[id='high-tom-attack-value']").val());
        var curr_high_tom_decay_box =  parseFloat($(".high-tom-env-box[id='high-tom-decay-value']").val());
        var curr_high_tom_sustain_box =  parseFloat($(".high-tom-env-box[id='high-tom-sustain-value']").val());
        var curr_high_tom_release_box =  parseFloat($(".high-tom-env-box[id='high-tom-release-value']").val());

        if (prev_type != curr_type) { prev_type = curr_type; }
        else if (prev_vol != curr_vol_input) { $(".synth-vol-box").val(curr_vol_input); prev_vol = curr_vol_input; }
        else if (prev_vol != curr_vol_box) { $(".synth-vol-input").val(curr_vol_box); prev_vol = curr_vol_box; }
        else if (prev_synth_base_freq != curr_synth_freq_input) { $(".synth-basefreq-box").val(curr_synth_freq_input); prev_synth_base_freq = curr_synth_freq_input; prev_base_freq = curr_synth_freq_input; keyFreqs = bindToFreqs(qwerty_12, prev_base_freq, n); }
        else if (prev_synth_base_freq != curr_synth_freq_box) { $(".synth-basefreq-input").val(curr_synth_freq_box); prev_synth_base_freq = curr_synth_freq_box; prev_base_freq = curr_synth_freq_box; keyFreqs = bindToFreqs(qwerty_12, prev_base_freq, n); }
        else if (prev_sound != curr_sound) { prev_sound = curr_sound; }
        else if (prev_osc != curr_osc) { prev_osc = curr_osc; }
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
        else if (prev_crash_cymbal_base_freq != curr_crash_cymbal_freq_input) { $(".crash-cymbal-basefreq-box").val(curr_crash_cymbal_freq_input); prev_crash_cymbal_base_freq = curr_crash_cymbal_freq_input; prev_base_freq = curr_crash_cymbal_freq_input; keyFreqs = bindToFreqs(qwerty_12, prev_base_freq, n); }
        else if (prev_crash_cymbal_base_freq != curr_crash_cymbal_freq_box) { $(".crash-cymbal-basefreq-input").val(curr_crash_cymbal_freq_box); prev_crash_cymbal_base_freq = curr_crash_cymbal_freq_box; prev_base_freq = curr_crash_cymbal_freq_box; keyFreqs = bindToFreqs(qwerty_12, prev_base_freq, n); }
        else if (prev_crash_cymbal_harmonicity != curr_crash_cymbal_harmonicity_input) { $(".crash-cymbal-harmonicity-box").val(curr_crash_cymbal_harmonicity_input); prev_crash_cymbal_harmonicity = curr_crash_cymbal_harmonicity_input; }
        else if (prev_crash_cymbal_harmonicity != curr_crash_cymbal_harmonicity_box) { $(".crash-cymbal-harmonicity-input").val(curr_crash_cymbal_harmonicity_box); prev_crash_cymbal_harmonicity = curr_crash_cymbal_harmonicity_box; }
        else if (prev_crash_cymbal_modulation != curr_crash_cymbal_modulation_input) { $(".crash-cymbal-modulation-box").val(curr_crash_cymbal_modulation_input); prev_crash_cymbal_modulation = curr_crash_cymbal_modulation_input; }
        else if (prev_crash_cymbal_modulation != curr_crash_cymbal_modulation_box) { $(".crash-cymbal-modulation-input").val(curr_crash_cymbal_modulation_box); prev_crash_cymbal_modulation = curr_crash_cymbal_modulation_box; }
        else if (prev_crash_cymbal_resonance != curr_crash_cymbal_resonance_input) { $(".crash-cymbal-resonance-box").val(curr_crash_cymbal_resonance_input); prev_crash_cymbal_resonance = curr_crash_cymbal_resonance_input; }
        else if (prev_crash_cymbal_resonance != curr_crash_cymbal_resonance_box) { $(".crash-cymbal-resonance-input").val(curr_crash_cymbal_resonance_box); prev_crash_cymbal_resonance = curr_crash_cymbal_resonance_box; }
        else if (prev_crash_cymbal_octaves != curr_crash_cymbal_octaves_input) { $(".crash-cymbal-octaves-box").val(curr_crash_cymbal_octaves_input); prev_crash_cymbal_octaves = curr_crash_cymbal_octaves_input; }
        else if (prev_crash_cymbal_octaves != curr_crash_cymbal_octaves_box) { $(".crash-cymbal-octaves-input").val(curr_crash_cymbal_octaves_box); prev_crash_cymbal_octaves = curr_crash_cymbal_octaves_box; }
        else if (prev_crash_cymbal_attack != curr_crash_cymbal_attack_input) { $(".crash-cymbal-env-box[id='crash-cymbal-attack-value']").val(curr_crash_cymbal_attack_input); prev_crash_cymbal_attack = curr_crash_cymbal_attack_input; }
        else if (prev_crash_cymbal_attack != curr_crash_cymbal_attack_box) { $(".crash-cymbal-attack-input").val(curr_crash_cymbal_attack_box); prev_crash_cymbal_attack = curr_crash_cymbal_attack_box; }
        else if (prev_crash_cymbal_decay != curr_crash_cymbal_decay_input) { $(".crash-cymbal-env-box[id='crash-cymbal-decay-value']").val(curr_crash_cymbal_decay_input); prev_crash_cymbal_decay = curr_crash_cymbal_decay_input; }
        else if (prev_crash_cymbal_decay != curr_crash_cymbal_decay_box) { $(".crash-cymbal-decay-input").val(curr_crash_cymbal_decay_box); prev_crash_cymbal_decay = curr_crash_cymbal_decay_box; }
        else if (prev_crash_cymbal_release != curr_crash_cymbal_release_input) { $(".crash-cymbal-env-box[id='crash-cymbal-release-value']").val(curr_crash_cymbal_release_input); prev_crash_cymbal_release = curr_crash_cymbal_release_input; }
        else if (prev_crash_cymbal_release != curr_crash_cymbal_release_box) { $(".crash-cymbal-release-input").val(curr_crash_cymbal_release_box); prev_crash_cymbal_release = curr_crash_cymbal_release_box; }
        else if (prev_ride_cymbal_base_freq != curr_ride_cymbal_freq_input) { $(".ride-cymbal-basefreq-box").val(curr_ride_cymbal_freq_input); prev_ride_cymbal_base_freq = curr_ride_cymbal_freq_input; prev_base_freq = curr_ride_cymbal_freq_input; keyFreqs = bindToFreqs(qwerty_12, prev_base_freq, n); }
        else if (prev_ride_cymbal_base_freq != curr_ride_cymbal_freq_box) { $(".ride-cymbal-basefreq-input").val(curr_ride_cymbal_freq_box); prev_ride_cymbal_base_freq = curr_ride_cymbal_freq_box; prev_base_freq = curr_ride_cymbal_freq_box; keyFreqs = bindToFreqs(qwerty_12, prev_base_freq, n); }
        else if (prev_ride_cymbal_harmonicity != curr_ride_cymbal_harmonicity_input) { $(".ride-cymbal-harmonicity-box").val(curr_ride_cymbal_harmonicity_input); prev_ride_cymbal_harmonicity = curr_ride_cymbal_harmonicity_input; }
        else if (prev_ride_cymbal_harmonicity != curr_ride_cymbal_harmonicity_box) { $(".ride-cymbal-harmonicity-input").val(curr_ride_cymbal_harmonicity_box); prev_ride_cymbal_harmonicity = curr_ride_cymbal_harmonicity_box; }
        else if (prev_ride_cymbal_modulation != curr_ride_cymbal_modulation_input) { $(".ride-cymbal-modulation-box").val(curr_ride_cymbal_modulation_input); prev_ride_cymbal_modulation = curr_ride_cymbal_modulation_input; }
        else if (prev_ride_cymbal_modulation != curr_ride_cymbal_modulation_box) { $(".ride-cymbal-modulation-input").val(curr_ride_cymbal_modulation_box); prev_ride_cymbal_modulation = curr_ride_cymbal_modulation_box; }
        else if (prev_ride_cymbal_resonance != curr_ride_cymbal_resonance_input) { $(".ride-cymbal-resonance-box").val(curr_ride_cymbal_resonance_input); prev_ride_cymbal_resonance = curr_ride_cymbal_resonance_input; }
        else if (prev_ride_cymbal_resonance != curr_ride_cymbal_resonance_box) { $(".ride-cymbal-resonance-input").val(curr_ride_cymbal_resonance_box); prev_ride_cymbal_resonance = curr_ride_cymbal_resonance_box; }
        else if (prev_ride_cymbal_octaves != curr_ride_cymbal_octaves_input) { $(".ride-cymbal-octaves-box").val(curr_ride_cymbal_octaves_input); prev_ride_cymbal_octaves = curr_ride_cymbal_octaves_input; }
        else if (prev_ride_cymbal_octaves != curr_ride_cymbal_octaves_box) { $(".ride-cymbal-octaves-input").val(curr_ride_cymbal_octaves_box); prev_ride_cymbal_octaves = curr_ride_cymbal_octaves_box; }
        else if (prev_ride_cymbal_attack != curr_ride_cymbal_attack_input) { $(".ride-cymbal-env-box[id='ride-cymbal-attack-value']").val(curr_ride_cymbal_attack_input); prev_ride_cymbal_attack = curr_ride_cymbal_attack_input; }
        else if (prev_ride_cymbal_attack != curr_ride_cymbal_attack_box) { $(".ride-cymbal-attack-input").val(curr_ride_cymbal_attack_box); prev_ride_cymbal_attack = curr_ride_cymbal_attack_box; }
        else if (prev_ride_cymbal_decay != curr_ride_cymbal_decay_input) { $(".ride-cymbal-env-box[id='ride-cymbal-decay-value']").val(curr_ride_cymbal_decay_input); prev_ride_cymbal_decay = curr_ride_cymbal_decay_input; }
        else if (prev_ride_cymbal_decay != curr_ride_cymbal_decay_box) { $(".ride-cymbal-decay-input").val(curr_ride_cymbal_decay_box); prev_ride_cymbal_decay = curr_ride_cymbal_decay_box; }
        else if (prev_ride_cymbal_release != curr_ride_cymbal_release_input) { $(".ride-cymbal-env-box[id='ride-cymbal-release-value']").val(curr_ride_cymbal_release_input); prev_ride_cymbal_release = curr_ride_cymbal_release_input; }
        else if (prev_ride_cymbal_release != curr_ride_cymbal_release_box) { $(".ride-cymbal-release-input").val(curr_ride_cymbal_release_box); prev_ride_cymbal_release = curr_ride_cymbal_release_box; }
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
        else if (prev_low_tom_base_freq != curr_low_tom_freq_input) { $(".low-tom-basefreq-box").val(curr_low_tom_freq_input); prev_low_tom_base_freq = curr_low_tom_freq_input; prev_base_freq = curr_low_tom_freq_input; keyFreqs = bindToFreqs(qwerty_12, prev_base_freq, n); }
        else if (prev_low_tom_base_freq != curr_low_tom_freq_box) { $(".low-tom-basefreq-input").val(curr_low_tom_freq_box); prev_low_tom_base_freq = curr_low_tom_freq_box; prev_base_freq = curr_low_tom_freq_box; keyFreqs = bindToFreqs(qwerty_12, prev_base_freq, n); }
        else if (prev_low_tom_pitch_decay != curr_low_tom_pitch_decay_input) { $(".low-tom-pitch-decay-box").val(curr_low_tom_pitch_decay_input); prev_low_tom_pitch_decay = curr_low_tom_pitch_decay_input; }
        else if (prev_low_tom_pitch_decay != curr_low_tom_pitch_decay_box) { $(".low-tom-pitch-decay-input").val(curr_low_tom_pitch_decay_box); prev_low_tom_pitch_decay = curr_low_tom_pitch_decay_box; }
        else if (prev_low_tom_octaves != curr_low_tom_octaves_input) { $(".low-tom-octaves-box").val(curr_low_tom_octaves_input); prev_low_tom_octaves = curr_low_tom_octaves_input; }
        else if (prev_low_tom_octaves != curr_low_tom_octaves_box) { $(".low-tom-octaves-input").val(curr_low_tom_octaves_box); prev_low_tom_octaves = curr_low_tom_octaves_box; }
        else if (prev_low_tom_attack != curr_low_tom_attack_input) { $(".low-tom-env-box[id='low-tom-attack-value']").val(curr_low_tom_attack_input); prev_low_tom_attack = curr_low_tom_attack_input; }
        else if (prev_low_tom_attack != curr_low_tom_attack_box) { $(".low-tom-attack-input").val(curr_low_tom_attack_box); prev_low_tom_attack = curr_low_tom_attack_box; }
        else if (prev_low_tom_decay != curr_low_tom_decay_input) { $(".low-tom-env-box[id='low-tom-decay-value']").val(curr_low_tom_decay_input); prev_low_tom_decay = curr_low_tom_decay_input; }
        else if (prev_low_tom_decay != curr_low_tom_decay_box) { $(".low-tom-decay-input").val(curr_low_tom_decay_box); prev_low_tom_decay = curr_low_tom_decay_box; }
        else if (prev_low_tom_sustain != curr_low_tom_sustain_input) { $(".low-tom-env-box[id='low-tom-sustain-value']").val(curr_low_tom_sustain_input); prev_low_tom_sustain = curr_low_tom_sustain_input; }
        else if (prev_low_tom_sustain != curr_low_tom_sustain_box) { $(".low-tom-sustain-input").val(curr_low_tom_sustain_box); prev_low_tom_sustain = curr_low_tom_sustain_box; }
        else if (prev_low_tom_release != curr_low_tom_release_input) { $(".low-tom-env-box[id='low-tom-release-value']").val(curr_low_tom_release_input); prev_low_tom_release = curr_low_tom_release_input; }
        else if (prev_low_tom_release != curr_low_tom_release_box) { $(".low-tom-release-input").val(curr_low_tom_release_box); prev_low_tom_release = curr_low_tom_release_box; }
        else if (prev_mid_tom_base_freq != curr_mid_tom_freq_input) { $(".mid-tom-basefreq-box").val(curr_mid_tom_freq_input); prev_mid_tom_base_freq = curr_mid_tom_freq_input; prev_base_freq = curr_mid_tom_freq_input; keyFreqs = bindToFreqs(qwerty_12, prev_base_freq, n); }
        else if (prev_mid_tom_base_freq != curr_mid_tom_freq_box) { $(".mid-tom-basefreq-input").val(curr_mid_tom_freq_box); prev_mid_tom_base_freq = curr_mid_tom_freq_box; prev_base_freq = curr_mid_tom_freq_box; keyFreqs = bindToFreqs(qwerty_12, prev_base_freq, n); }
        else if (prev_mid_tom_pitch_decay != curr_mid_tom_pitch_decay_input) { $(".mid-tom-pitch-decay-box").val(curr_mid_tom_pitch_decay_input); prev_mid_tom_pitch_decay = curr_mid_tom_pitch_decay_input; }
        else if (prev_mid_tom_pitch_decay != curr_mid_tom_pitch_decay_box) { $(".mid-tom-pitch-decay-input").val(curr_mid_tom_pitch_decay_box); prev_mid_tom_pitch_decay = curr_mid_tom_pitch_decay_box; }
        else if (prev_mid_tom_octaves != curr_mid_tom_octaves_input) { $(".mid-tom-octaves-box").val(curr_mid_tom_octaves_input); prev_mid_tom_octaves = curr_mid_tom_octaves_input; }
        else if (prev_mid_tom_octaves != curr_mid_tom_octaves_box) { $(".mid-tom-octaves-input").val(curr_mid_tom_octaves_box); prev_mid_tom_octaves = curr_mid_tom_octaves_box; }
        else if (prev_mid_tom_attack != curr_mid_tom_attack_input) { $(".mid-tom-env-box[id='mid-tom-attack-value']").val(curr_mid_tom_attack_input); prev_mid_tom_attack = curr_mid_tom_attack_input; }
        else if (prev_mid_tom_attack != curr_mid_tom_attack_box) { $(".mid-tom-attack-input").val(curr_mid_tom_attack_box); prev_mid_tom_attack = curr_mid_tom_attack_box; }
        else if (prev_mid_tom_decay != curr_mid_tom_decay_input) { $(".mid-tom-env-box[id='mid-tom-decay-value']").val(curr_mid_tom_decay_input); prev_mid_tom_decay = curr_mid_tom_decay_input; }
        else if (prev_mid_tom_decay != curr_mid_tom_decay_box) { $(".mid-tom-decay-input").val(curr_mid_tom_decay_box); prev_mid_tom_decay = curr_mid_tom_decay_box; }
        else if (prev_mid_tom_sustain != curr_mid_tom_sustain_input) { $(".mid-tom-env-box[id='mid-tom-sustain-value']").val(curr_mid_tom_sustain_input); prev_mid_tom_sustain = curr_mid_tom_sustain_input; }
        else if (prev_mid_tom_sustain != curr_mid_tom_sustain_box) { $(".mid-tom-sustain-input").val(curr_mid_tom_sustain_box); prev_mid_tom_sustain = curr_mid_tom_sustain_box; }
        else if (prev_mid_tom_release != curr_mid_tom_release_input) { $(".mid-tom-env-box[id='mid-tom-release-value']").val(curr_mid_tom_release_input); prev_mid_tom_release = curr_mid_tom_release_input; }
        else if (prev_mid_tom_release != curr_mid_tom_release_box) { $(".mid-tom-release-input").val(curr_mid_tom_release_box); prev_mid_tom_release = curr_mid_tom_release_box; }
        else if (prev_high_tom_base_freq != curr_high_tom_freq_input) { $(".high-tom-basefreq-box").val(curr_high_tom_freq_input); prev_high_tom_base_freq = curr_high_tom_freq_input; prev_base_freq = curr_high_tom_freq_input; keyFreqs = bindToFreqs(qwerty_12, prev_base_freq, n); }
        else if (prev_high_tom_base_freq != curr_high_tom_freq_box) { $(".high-tom-basefreq-input").val(curr_high_tom_freq_box); prev_high_tom_base_freq = curr_high_tom_freq_box; prev_base_freq = curr_high_tom_freq_box; keyFreqs = bindToFreqs(qwerty_12, prev_base_freq, n); }
        else if (prev_high_tom_pitch_decay != curr_high_tom_pitch_decay_input) { $(".high-tom-pitch-decay-box").val(curr_high_tom_pitch_decay_input); prev_high_tom_pitch_decay = curr_high_tom_pitch_decay_input; }
        else if (prev_high_tom_pitch_decay != curr_high_tom_pitch_decay_box) { $(".high-tom-pitch-decay-input").val(curr_high_tom_pitch_decay_box); prev_high_tom_pitch_decay = curr_high_tom_pitch_decay_box; }
        else if (prev_high_tom_octaves != curr_high_tom_octaves_input) { $(".high-tom-octaves-box").val(curr_high_tom_octaves_input); prev_high_tom_octaves = curr_high_tom_octaves_input; }
        else if (prev_high_tom_octaves != curr_high_tom_octaves_box) { $(".high-tom-octaves-input").val(curr_high_tom_octaves_box); prev_high_tom_octaves = curr_high_tom_octaves_box; }
        else if (prev_high_tom_attack != curr_high_tom_attack_input) { $(".high-tom-env-box[id='high-tom-attack-value']").val(curr_high_tom_attack_input); prev_high_tom_attack = curr_high_tom_attack_input; }
        else if (prev_high_tom_attack != curr_high_tom_attack_box) { $(".high-tom-attack-input").val(curr_high_tom_attack_box); prev_high_tom_attack = curr_high_tom_attack_box; }
        else if (prev_high_tom_decay != curr_high_tom_decay_input) { $(".high-tom-env-box[id='high-tom-decay-value']").val(curr_high_tom_decay_input); prev_high_tom_decay = curr_high_tom_decay_input; }
        else if (prev_high_tom_decay != curr_high_tom_decay_box) { $(".high-tom-decay-input").val(curr_high_tom_decay_box); prev_high_tom_decay = curr_high_tom_decay_box; }
        else if (prev_high_tom_sustain != curr_high_tom_sustain_input) { $(".high-tom-env-box[id='high-tom-sustain-value']").val(curr_high_tom_sustain_input); prev_high_tom_sustain = curr_high_tom_sustain_input; }
        else if (prev_high_tom_sustain != curr_high_tom_sustain_box) { $(".high-tom-sustain-input").val(curr_high_tom_sustain_box); prev_high_tom_sustain = curr_high_tom_sustain_box; }
        else if (prev_high_tom_release != curr_high_tom_release_input) { $(".high-tom-env-box[id='high-tom-release-value']").val(curr_high_tom_release_input); prev_high_tom_release = curr_high_tom_release_input; }
        else if (prev_high_tom_release != curr_high_tom_release_box) { $(".high-tom-release-input").val(curr_high_tom_release_box); prev_high_tom_release = curr_high_tom_release_box; }
        
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
        $(".release-input").val(5);
        $("#release-value").val(5);
        defaultSynth = initPedalSynth();
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

    $(".attack-curve").on("click", function() {
        $(".attack-curve").removeClass("curr-curve");
        $(this).addClass("curr-curve");
        prev_attack_curve = $(this).attr('name');
        defaultSynth = initSynth();
    });

    $(".decay-curve").on("click", function() {
        $(".decay-curve").removeClass("curr-curve");
        $(this).addClass("curr-curve");
        prev_decay_curve = $(this).attr('name');
        defaultSynth = initSynth();
    });

    $(".release-curve").on("click", function() {
        $(".release-curve").removeClass("curr-curve");
        $(this).addClass("curr-curve");
        prev_release_curve = $(this).attr('name');
        defaultSynth = initSynth();
    });

    document.body.onkeydown = function(e) {
        if(e.key == ' ' || (e.key == ' ' && e.repeat)) {
            e.preventDefault();
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

    $(document).on("click", ".attack-curve", function() {
        if ($("body").css("background-color") == "rgb(0, 0, 0)") {
            $(".attack-curve").css("box-shadow", "none");
            $(this).css("box-shadow", "0 0 15px #0039ff");
        }
    });

    $(document).on("click", ".decay-curve", function() {
        if ($("body").css("background-color") == "rgb(0, 0, 0)") {
            $(".decay-curve").css("box-shadow", "none");
            $(this).css("box-shadow", "0 0 15px #0039ff");
        }
    });

    $(document).on("click", ".release-curve", function() {
        if ($("body").css("background-color") == "rgb(0, 0, 0)") {
            $(".release-curve").css("box-shadow", "none");
            $(this).css("box-shadow", "0 0 15px #0039ff");
        }
    });

    $(".crash-cymbal-env").hide();
    $(".ride-cymbal-env").hide();
    $(".low-tom-env").hide();
    $(".mid-tom-env").hide();
    $(".high-tom-env").hide();
    $(".kick-env").hide();

    $("#crash-cymbal-dropdown").on("click", function() {
        if ($(".crash-cymbal-env").is(":hidden")) {
            $(".crash-cymbal-env").show();
        }
        else {$(".crash-cymbal-env").hide();}
    });

    $("#ride-cymbal-dropdown").on("click", function() {
        if ($(".ride-cymbal-env").is(":hidden")) {
            $(".ride-cymbal-env").show();
        }
        else {$(".ride-cymbal-env").hide();}
    });

    $("#high-tom-dropdown").on("click", function() {
        if ($(".high-tom-env").is(":hidden")) {
            $(".high-tom-env").show();
        }
        else {$(".high-tom-env").hide();}
    });

    $("#mid-tom-dropdown").on("click", function() {
        if ($(".mid-tom-env").is(":hidden")) {
            $(".mid-tom-env").show();
        }
        else {$(".mid-tom-env").hide();}
    });

    $("#low-tom-dropdown").on("click", function() {
        if ($(".low-tom-env").is(":hidden")) {
            $(".low-tom-env").show();
        }
        else {$(".low-tom-env").hide();}
    });
    
    $("#kick-dropdown").on("click", function() {
        if ($(".kick-env").is(":hidden")) {
            $(".kick-env").show();
        }
        else {$(".kick-env").hide();}
    });

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
    });

    $(document).on("click", ".full-record-btn", function() {
        $(".track-selected").removeClass("track-selected");
        $(this).closest(".daw-track").addClass("track-selected");
        $(this).addClass("disabled");
        $(".floating-record-btn").addClass("disabled");
        $(".floating-stop-btn").removeClass("disabled");
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
            $(".floating-record-btn").removeClass("disabled");
            $(".floating-stop-btn").addClass("disabled");
            $(".floating-play-btn").removeClass("disabled");
            $(".floating-loop-btn").removeClass("disabled");
            
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
                        container: document.querySelector(".track-selected > .zoomview-container > .overview-container"),
                    },
                    mediaElement: document.querySelector(".track-selected > audio"),
                    webAudio: {
                        audioContext: new AudioContext()
                    }
                };
                Peaks.init(options, function(err, peaks) {
                    // Do something when the waveform is displayed and ready
                });
            })(peaks);
        });
    });

    // keyboard_color = $(".color-picker").val();
    // $(".black-key").css("background-color", keyboard_color);
    // $(".white-key, .space-key").css("border", "1px solid ".concat(keyboard_color));
    // $(".color-picker").change(function() {
    //     keyboard_color = $(".color-picker").val();
    //     $(".black-key").css("background-color", keyboard_color);
    //     $(".white-key, .space-key").css("border", "1px solid ".concat(keyboard_color));
    //     options['overview']['playedWaveformColor'] = keyboard_color;
    // });

    $(document).on("click", ".full-play-btn", function() {
        $('.full-play-btn').addClass('disabled');
        $('.full-pause-btn').removeClass('disabled');
        $('.floating-play-btn').addClass('disabled');
        $('.floating-pause-btn').removeClass('disabled');
        const audios = document.querySelectorAll(".replaced");
        audios.forEach(audio => {
            audio.play(); 
        });
    });

    $(document).on("click", ".full-pause-btn", function() {
        $('.full-pause-btn').addClass('disabled');
        $('.full-play-btn').removeClass('disabled');
        $('.floating-pause-btn').addClass('disabled');
        $('.floating-play-btn').removeClass('disabled');
        const audios = document.querySelectorAll(".replaced");
        audios.forEach(audio => {
            audio.pause(); 
        });
    });

    $(document).on("click", ".full-loop-btn", function() {
        if (document.querySelector('.full-loop-btn').classList.contains('toggled')) {
            $('.full-loop-btn').removeClass('toggled');
            $('.floating-loop-btn').removeClass('toggled');
            const audios = document.querySelectorAll(".replaced");
            audios.forEach(audio => {
                audio.loop = false; 
            });
        }
        else {
            $('.full-loop-btn').addClass('toggled');
            $('.floating-loop-btn').addClass('toggled');
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

$(document).on("click", ".dark-mode-checkbox", function() {
    if ($("body").css("background-color") == "rgb(255, 255, 255)") {
        $("body").css("background", "black");
        $(".black-key").css("background-color", "rgba(21, 185, 87, .7)");
        $(".black-key").css("color", "black");
        $(".white-key, .space-key").css("background-color", "black");
        $(".white-key").css("color", "white");
        $(".white-key, .space-key").css("border", "1px solid rgba(21, 185, 87, .7)");
        $(".qwerty-key.disabled").css("opacity", ".2");
        $(".tambor-perform-logo").css("filter", "invert(100%)");
        $(".env-curve").css("filter", "invert(100%)");
        $(".curr-curve").css("box-shadow", "0 0 15px #0039ff");
        $("input[type=text], input[type=range], select").css("opacity", ".7");
        $("label").css("color", "white");
        $(".daw-track-left").css("opacity", ".8");
        $(".daw-track-new").css("background-color", "rgba(200,200,200,.8)")
        $(".daw-nav-item").css("background-color", "rgba(255,215,0,.3)");
        $(".daw-curr").css("background-color", "rgba(255,215,0,.5)");
    }
    else {
        $("body").css("background", "white");
        $(".black-key").css("background-color", "black");
        $(".black-key").css("color", "white");
        $(".white-key, .space-key").css("background-color", "white");
        $(".white-key").css("color", "black");
        $(".white-key, .space-key").css("border", "1px solid black");
        $(".qwerty-key.disabled").css("opacity", ".3");
        $(".tambor-perform-logo").css("filter", "invert(0%)");
        $(".env-curve").css("filter", "invert(0%)");
        $(".curr-curve").css("box-shadow", "0 0 10px #ffc600");
        $("input[type=text], input[type=range], select").css("opacity", "1");
        $("label").css("color", "black");
        $(".daw-track-left").css("opacity", "1");
        $(".daw-track-new").css("background-color", "white")
        $(".daw-nav-item").css("background-color", "white");
        $(".daw-curr").css("background-color", "rgba(255,215,0)");
    }
});
