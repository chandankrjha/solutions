// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Counter = require('./counters');



var LandingPageSchema = new Schema({
    _id: { type: Number, required: false },
    type: { type: String, required: false },
    meta_clean_URL_tag: { type: String, required: true },
    meta_name: { type: String, required: true },
    updated_time: { type: Date, required: false },
    deleted: { type: Number, required: false },
    created_time: { type: Date, required: false },
    meta_data: new Schema({
        add_jfresultsversion_to_api_call: { type: Number, required: false },
        adhoc_plus_disable_pacing: { type: Number, required: false },
        adhoc_plus_has_priority: { type: Number, required: false },
        adhoc_server: { type: String, required: false },
        adhocplus_vs_network_split_player: { type: String, required: false },
        api_server: { type: String, required: false },
        auto_jump_ad_location: { type: String, required: false },
        auto_jump_destination_url: { type: String, required: false },
        auto_jump_impression_url: { type: String, required: false },
        auto_jump_using_adhoc_redirect: { type: Number, required: false },
        autoplay: { type: Number, required: false },
        call_audience_profiling_service: { type: Number, required: false },
        channel_link: { type: Number, required: false },
        code_tight_below_player: { type: String, required: false },
        disable_all_links: { type: String, required: false },
        disable_bad_referer_homepage_redirect: { type: Number, required: false },
        disable_feedback: { type: Number, required: false },
        disable_footers: { type: Number, required: false },
        disable_header: { type: Number, required: false },
        disable_playlist_loop: { type: Number, required: false },
        enable_adhoc_plus_for_networks: { type: String, required: false },
        enable_virtual_mouse_hyperlink: { type: Number, required: false },
        error_url: { type: String, required: false },
        favourite_action: { type: Number, required: false },
        google_above_player: { type: String, required: false },
        google_above_results: { type: String, required: false },
        google_below_header: { type: String, required: false },
        google_below_player: { type: String, required: false },
        has_expanding_ads: { type: String, required: false },
        hosts: { type: String, required: false },
        html5_streamstats_additions: { type: String, required: false },
        jw_test: { type: Number, required: false },
        kaltura_playlist_id: { type: String, required: false },
        kaltura_playlist_name: { type: String, required: false },
        kaltura_ui_conf_id: { type: String, required: false },
        large_dummy_companion_clickthrough: { type: String, required: false },
        link_titles_to_same_page: { type: String, required: false },
        number_videos_play_in_single_player: { type: String, required: false },
        override_player_stats_server: { type: String, required: false },
        pdl_type: { type: String, required: false },
        player_continues_after_link_click: { type: Number, required: false },
        preview_length: { type: String, required: false },
        query: { type: String, required: false },
        result_links_open_in_same_window: { type: Number, required: false },
        rmp_overlay_url: { type: String, required: false },
        rmp_url: { type: String, required: false },
        share_action: { type: Number, required: false },
        show_large_dummy_companion: { type: Number, required: false },
        show_previews_only: { type: String, required: false },
        sponsoredsearch_same_ad_check: { type: String, required: false },
        staging_overrides: { type: String, required: false },
        target_id: { type: String, required: false },
        use_kaltura: { type: Number, required: false },
        use_new_adhoc_adcode: { type: String, required: false },
        use_new_adhoc_alternative_domain: { type: Number, required: false },
        use_new_adhoc_enable_click_cap: { type: Number, required: false },
        use_new_adhoc_enablecache: { type: Number, required: false },
        use_new_adhoc_frequency_capping_prefetch_guid: { type: Number, required: false },
        use_new_adhoc_on_previews: { type: Number, required: false },
        use_new_adhoc_source_site: { type: String, required: false },
        use_new_adhoc_system_v3: { type: Number, required: false },
        use_simplified_landing_pg: { type: Number, required: false },
        use_www6: { type: Number, required: false },
        verification: { type: Number, required: false },
        meta_name: { type: String, required: false }
    })
}, { collection: 'landing_page' });


LandingPageSchema.pre('save', function(next) {
    var doc = this;

    var now = new Date();
    doc.updated_time = now;
    if (!this.created_time) {
        doc.created_time = now;
    }

    Counter.findByIdAndUpdate({ _id: 'landing_page' }, { $inc: { seq: 1 } }, function(error, counter) {
        if (error) {
            return next(error);
        } else {
            doc._id = counter.seq;
            next();
        }

    });
});


// set up a mongoose model and pass it using module.exports
module.exports = LandingPageSchema;
