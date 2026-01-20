<?php
/**
 * Plugin Name: ACF REST API Order By Date
 * Description: Allow sorting a custom post type by an ACF date field via the REST API.
 * Version: 1.0.0
 * Author: cptSwing (well chatGPT really)
 */

defined( 'ABSPATH' ) || exit;

/**
 * Allow orderby=datum in REST API
 */
add_filter( 'rest_nachricht_collection_params', function ( $params ) {
    if ( isset( $params['orderby']['enum'] ) ) {
        $params['orderby']['enum'][] = 'datum';
    }
    return $params;
} );

/**
 * Enable ordering by an ACF date field for the REST API.
 *
 * Example:
 * /wp-json/wp/v2/nachricht?orderby=datum&order=ASC
 */
add_filter( 'rest_nachricht_query', function ( $args, $request ) {
    if ( $request->get_param( 'orderby' ) === 'datum' ) {
        $args['meta_key']  = 'datum';
        $args['orderby']   = 'meta_value';
        $args['meta_type'] = 'DATE';
        $args['order']     = $request->get_param( 'order' ) ?: 'asc';
    }
    return $args;
}, 10, 2 );
