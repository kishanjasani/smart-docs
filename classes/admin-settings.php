<?php
/**
 * Plugin Settings Manager
 * 
 * Responsible for registering plugin settings, rendering admin menu, etc.
 * 
 * @since 1.0.0
 * @package SmartDocs
 */

namespace SmartDocs;

class Admin {

	public function __construct() {
		// Action to register setting for get_option function.
		add_action( 'init', array( $this, 'register_plugin_settings' ) );

		// Action to register settings page menu in cpt(smart-doc).
		add_action( 'admin_menu', array( $this, 'register_options_menu' ) );

		// Action to include script for admin options page.
		add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_admin_script' ) );
	}

	/**
	 * Registers option menu for SmartDocs Settings
	 *
	 * @return void
	 */
	public function register_options_menu() {
		// Adding sub menu to the cpt.
		add_submenu_page(
			'edit.php?post_type=smart-doc', // Parent slug.
			__( 'Settings', 'smart-docs' ), // Page title.
			__( 'Settings', 'smart-docs' ), // Menu title.
			'manage_options', // Capability.
			'smart_doc_settings', // Menu slug.
			array( $this, 'render_options_page' ) // Callback function.
		);
	}

	/**
	 * Includes options page from react.
	 *
	 * @since 1.0.0
	 * @return void
	 */
	public function render_options_page() {
		echo '<div id="sd-setting-root"></div>';
	}

	/**
	 * For registering settings in rest api(wp.api.model.Settings).
	 *
	 * @return void
	 */
	public function register_plugin_settings() {
		register_setting(
			'smart-docs-settings-group',
			'sd_archive_page_title',
			array(
				'type'         => 'string',
				'show_in_rest' => true,
				'default'      => 'Docs',
			)
		);

		register_setting(
			'smart-docs-settings-group',
			'sd_post_type_selected',
			array(
				'show_in_rest' => array(
					'schema' => array(
						'type'  => 'array',
						'items' => array(
							'type' => 'string',
						),
					),
				),
				'default'      => array( 'smart-doc' ),
			)
		);

		register_setting(
			'smart-docs-settings-group',
			'sd_enable_single_template',
			array(
				'type'         => 'boolean',
				'show_in_rest' => true,
				'default'      => true,
			)
		);

		register_setting(
			'smart-docs-settings-group',
			'sd_enable_category_and_tag_template',
			array(
				'type'         => 'boolean',
				'show_in_rest' => true,
				'default'      => true,
			)
		);

		register_setting(
			'smart-docs-settings-group',
			'sd_turnoff_doc_comment',
			array(
				'type'         => 'boolean',
				'show_in_rest' => true,
				'default'      => false,
			)
		);

		register_setting(
			'smart-docs-settings-group',
			'sd_enable_live_search',
			array(
				'type'         => 'boolean',
				'show_in_rest' => true,
				'default'      => true,
			)
		);

		register_setting(
			'smart-docs-settings-group',
			'sd_show_last_update_time',
			array(
				'type'         => 'boolean',
				'show_in_rest' => true,
				'default'      => true,
			)
		);
	}

	/**
	 * Function to enque admin side script(Settings page).
	 *
	 * @param string $hook To check if the current page is SmartDocs setting or not.
	 * @return void
	 */
	public function enqueue_admin_script( $hook ) {	
		// To check if the current page is SmartDocs setting or not.
		if ( 'smart-doc_page_smart_doc_settings' !== $hook ) {
			return;
		}

		$dir = SMART_DOCS_PATH;

		$script_asset_path = "$dir/assets/admin/index.asset.php";
		if ( ! file_exists( $script_asset_path ) ) {
			throw new Error(
				'You need to run `npm start` or `npm run build` for the "create-block/docs2" block first.'
			);
		}

		$index_js     = 'assets/admin/index.js';
		$script_asset = require( $script_asset_path );

		wp_enqueue_script(
			'sd-settings',
			SMART_DOCS_URL . $index_js,
			$script_asset['dependencies'],
			$script_asset['version'],
			true
		);

		$editor_css = 'assets/admin/index.css';

		wp_enqueue_style(
			'sd-settings-style',
			SMART_DOCS_URL . $editor_css,
			array('wp-components'),
		);
			

		// To get all the registered post types.
		$post_types = get_post_types(
			array(
				'public' => true,
			),
			'objects'
		);

		$types = array();

		foreach ( $post_types as $type ) {
			$types[ $type->name ] = $type->labels->name;
		}

		// Localising the script or creating global variable in script to send the number of post types created through ajax.
		wp_localize_script(
			'sd-settings',
			'sd_vars',
			array(
				'url'        => admin_url( 'admin-ajax.php' ),
				'ajax_nonce' => wp_create_nonce( 'docs_option' ),
				'post_types' => $types,
				'version'	=> '1.0.0',
			)
		);
	}

}