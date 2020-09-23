<?php
/**
 * Functions related to shortcode for live search
 *
 * @package SmartDocs/Shortcode
 * @author IdeaBox
 * @version 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// To render the search box of WordPress.
add_shortcode( 'smart_doc_wp_live_search', 'smart_doc_render_search_box' );

/**
 * For rendering the search box.
 *
 * @param int $atts    Get attributes for the search field.
 * @param int $content Get content to search from.
 */
function smart_doc_render_search_box( $atts, $content = null ) {
	ob_start();
	?>
	<div class="sd-live-search">
		<div class="sd-search-form-container">
			<form role="search" method="post" class="sd-search-form" action="">
				<input id="sd-sq" type="search" class="sd-search-field" placeholder="<?php echo esc_attr_x( 'Search for answers…', 'placeholder', 'smart-docs' ); ?>" value="<?php echo get_search_query(); ?>" name="s" title="<?php echo esc_attr_x( 'Search', 'label', 'smart-docs' ); ?>" autocomplete="off" autocorrect="off" />

				<div class="sd-spinner live-search-loading">
					<img src="<?php echo esc_url( plugins_url( '../assets/images/ring.gif', __FILE__ ) ); ?>" >
				</div>
			</form>
		</div>
	</div>
	<?php
	// Returning the html document.
	return ob_get_clean();
}
