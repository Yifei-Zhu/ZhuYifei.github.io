var __index = {"config":{"lang":["en"],"separator":"[\\s\\-\\.]","pipeline":["stopWordFilter"]},"docs":[{"location":"index.html","title":"Welcome to Zhuyf's Wiki","text":"<p>Welcome to my wiki! I'm ZhuYifei, a computational chemistry PhD student specializing in machine learning and non-adiabatic dynamics.</p> <p>Here, I share my study notes, research insights, and collaborative projects on quantum chemical calculations. This space is intended to be a resource for students and researchers alike, fostering learning and discussion in these fascinating fields.</p> <p>I invite you to explore the content and reach out with any questions or suggestions.</p>"},{"location":"wiki/tags.html","title":"Tags","text":"<p>The following tags must be included in the files of corresponding section:</p> Section/Topic Tag Author Guidelines Author Guidelines Newcomer Guide Newcomer Guide Sortware Usage Sortware Usage Code Sharing Shared Code Recommended Resources Studying Resource Recommended Books/Vedios/etc. Book/Video/... <p>Following is a list of relevant tags:</p>"},{"location":"wiki/tags.html#gaussian","title":"Gaussian","text":"<ul> <li>Gibbs Free Energy Calculation for O\u2082 to H\u2082O\u2082 Reaction</li> </ul>"},{"location":"wiki/tags.html#physical-chemistry","title":"Physical Chemistry","text":"<ul> <li>Gibbs Free Energy Calculation for O\u2082 to H\u2082O\u2082 Reaction</li> </ul>"},{"location":"wiki/tags.html#qm-calculation","title":"QM Calculation","text":"<ul> <li>Gibbs Free Energy Calculation for O\u2082 to H\u2082O\u2082 Reaction</li> </ul>"},{"location":"wiki/qm_cal/gibbs_ORR.html","title":"Gibbs Free Energy Calculation for O\u2082 to H\u2082O\u2082 Reaction","text":"<p>This wiki provides a concise guide on calculating the Gibbs free energy (\u0394G) for the reaction where O\u2082 is reduced to H\u2082O\u2082 via a 2-electron oxygen reduction reaction (ORR) pathway on a catalyst surface (*). The process is key to understanding catalyst efficiency in producing H\u2082O\u2082.</p>","tags":["QM Calculation","Gaussian","Physical Chemistry"]},{"location":"wiki/qm_cal/gibbs_ORR.html#reaction-pathway","title":"Reaction Pathway","text":"<p>The ORR pathway involves these steps:</p> <ol> <li>O\u2082(g) \u2192 *O\u2082: O\u2082 adsorbs onto the catalyst.</li> <li>*O\u2082 + H\u207a + e\u207b \u2192 *OOH: Proton-electron transfer forms *OOH.</li> <li>*OOH + H\u207a + e\u207b \u2192 *HOOH: Another transfer forms *HOOH (adsorbed H\u2082O\u2082).</li> <li>*HOOH \u2192 H\u2082O\u2082(l) + *: H\u2082O\u2082 desorbs into liquid phase.</li> </ol>","tags":["QM Calculation","Gaussian","Physical Chemistry"]},{"location":"wiki/qm_cal/gibbs_ORR.html#calculating-g","title":"Calculating \u0394G","text":"","tags":["QM Calculation","Gaussian","Physical Chemistry"]},{"location":"wiki/qm_cal/gibbs_ORR.html#general-formula","title":"General Formula","text":"<p>For each step:</p> \\[ \\Delta G = \\Delta E + \\Delta \\text{ZPE} - T \\times \\Delta S \\] <ul> <li>\u0394E: Electronic energy change (from DFT).</li> <li>\u0394ZPE: Zero-point energy change.</li> <li>T \u00d7 \u0394S: Entropy contribution (T = 298.15 K).</li> </ul> <p>Proton-electron steps use the computational hydrogen electrode (CHE) model: \\(G(\\text{H}^+ + \\text{e}^-) = \\frac{1}{2} G(\\text{H}_2)\\) at U = 0 V, pH = 0.</p>","tags":["QM Calculation","Gaussian","Physical Chemistry"]},{"location":"wiki/qm_cal/gibbs_ORR.html#step-by-step-g","title":"Step-by-Step \u0394G","text":"<ol> <li>O\u2082(g) \u2192 *O\u2082:    \\(\\Delta G_1 = G(*\\text{O}_2) - G(*) - G(\\text{O}_2\\text{(g)})\\)</li> <li>*O\u2082 + H\u207a + e\u207b \u2192 *OOH:    \\(\\Delta G_2 = G(*\\text{OOH}) - G(*\\text{O}_2) - \\frac{1}{2} G(\\text{H}_2)\\)</li> <li>*OOH + H\u207a + e\u207b \u2192 *HOOH:    \\(\\Delta G_3 = G(*\\text{HOOH}) - G(*\\text{OOH}) - \\frac{1}{2} G(\\text{H}_2)\\)</li> <li>*HOOH \u2192 H\u2082O\u2082(l) + *:    \\(\\Delta G_4 = G(*) + G(\\text{H}_2\\text{O}_2\\text{(l)}) - G(*\\text{HOOH})\\)</li> </ol>","tags":["QM Calculation","Gaussian","Physical Chemistry"]},{"location":"wiki/qm_cal/gibbs_ORR.html#free-energy-diagram","title":"Free Energy Diagram","text":"<ul> <li>Reference: O\u2082(g) + * = 0 eV.</li> <li>Plot: *O\u2082 (\u0394G\u2081), *OOH (\u0394G\u2081 + \u0394G\u2082), *HOOH (\u0394G\u2081 + \u0394G\u2082 + \u0394G\u2083), H\u2082O\u2082(l) + * (\u0394G\u2081 + \u0394G\u2082 + \u0394G\u2083 + \u0394G\u2084).</li> </ul>","tags":["QM Calculation","Gaussian","Physical Chemistry"]},{"location":"wiki/qm_cal/gibbs_ORR.html#key-points-to-note","title":"Key Points to Note","text":"<ul> <li>O\u2082(g) Correction: DFT underestimates O\u2082(g) stability. Use:$$   G(\\text{O}_2\\text{(g)}) = 2G(\\text{H}_2\\text{O}) - 2G(\\text{H}_2) + 4.92 \\, \\text{eV}   $$</li> <li>H\u2082O\u2082(l) Adjustment: Convert $ G(\\text{H}_2\\text{O}_2\\text{(g)}) $ to liquid phase:$$   G(\\text{H}_2\\text{O}_2\\text{(l)}) = G(\\text{H}_2\\text{O}_2\\text{(g)}) - 0.28 \\, \\text{eV}   $$</li> <li>Adsorption Sites: Optimize *O\u2082, *OOH, *HOOH configurations for stability.</li> <li>Consistency: Use identical DFT settings for all species.</li> <li>Entropy &amp; ZPE: Include these corrections from frequency calculations.</li> </ul>","tags":["QM Calculation","Gaussian","Physical Chemistry"]},{"location":"wiki/qm_cal/gibbs_ORR.html#summary","title":"Summary","text":"<p>Accurate \u0394G calculation for O\u2082 to H\u2082O\u2082 requires precise energy terms, gas-phase corrections, and consistent methods. These steps enable a reliable free energy diagram for evaluating ORR catalysts.</p>","tags":["QM Calculation","Gaussian","Physical Chemistry"]},{"location":"wiki/tags.html","title":"Tags","text":"<p>The following tags must be included in the files of corresponding section:</p> Section/Topic Tag Author Guidelines Author Guidelines Newcomer Guide Newcomer Guide Sortware Usage Sortware Usage Code Sharing Shared Code Recommended Resources Studying Resource Recommended Books/Vedios/etc. Book/Video/... <p>Following is a list of relevant tags:</p>"},{"location":"wiki/tags.html#gaussian","title":"Gaussian","text":"<ul> <li>Gibbs Free Energy Calculation for O\u2082 to H\u2082O\u2082 Reaction</li> </ul>"},{"location":"wiki/tags.html#physical-chemistry","title":"Physical Chemistry","text":"<ul> <li>Gibbs Free Energy Calculation for O\u2082 to H\u2082O\u2082 Reaction</li> </ul>"},{"location":"wiki/tags.html#qm-calculation","title":"QM Calculation","text":"<ul> <li>Gibbs Free Energy Calculation for O\u2082 to H\u2082O\u2082 Reaction</li> </ul>"}]}