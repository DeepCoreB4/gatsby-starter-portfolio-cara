/* eslint react/no-unknown-property: 0 */
/* eslint react/prefer-stateless-function: 0 */

/**
 * Spotify player iframe widget
 *
 * @author Alexander Wallin <office@alexanderwallin.com>
 * @see https://developer.spotify.com/technologies/widgets/spotify-play-button/
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Dimension prop type
const dimensionPropType = PropTypes.oneOfType([PropTypes.number, PropTypes.string])

// Size presets, defined by Spotify
const sizePresets = {
    large: {
        width: 900,
        height: 250,
    },
    compact: {
        width: 900,
        height: 150,
    },
}

/**
 * SpotifyPlayer class
 */
class SpotifyPlayer extends Component {
    // ------------------------------------------------------
    // Render
    // ------------------------------------------------------

    render() {
        const { uri, view, theme } = this.props
        let { size } = this.props

        if (typeof size === 'string') {
            size = sizePresets[size]
        }

        return (
            <iframe
                title="Spotify"
                className="SpotifyPlayer"
                src={`https://hearthis.at/set/115824-8629008/embed/transparent_black/?hcolor=&color=&style=2&block_size=2&block_space=1&background=1&waveform=0&cover=0&autoplay=0&css=" frameborder="0" allowtransparency allow="autoplay`}
                width={size.width}
                height={size.height}
                frameBorder="0"
                allowtransparency="true"
            />,

            <iframe
            title="Spotify2"
            className="SpotifyPlayer2"
            src={`https://hearthis.at/set/113598-8629008/embed/transparent_black/?hcolor=&color=&style=2&block_size=2&block_space=1&background=1&waveform=0&cover=0&autoplay=0&css=" frameborder="0" allowtransparency allow="autoplay`}
            width={size.width}
            height={size.height}
            frameBorder="0"
            allowtransparency="true"
        />
        )
    }
}

SpotifyPlayer.propTypes = {
    // Spotify URI
    uri: PropTypes.string.isRequired,

    // Size as either a preset or as custom dimensions
    size: PropTypes.oneOfType([
        PropTypes.oneOf(['large', 'compact']),
        PropTypes.shape({
            width: dimensionPropType,
            height: dimensionPropType,
        }),
    ]),

    // View
    view: PropTypes.oneOf(['list', 'coverart']),

    // Theme
    theme: PropTypes.oneOf(['black', 'white']),
}

SpotifyPlayer.defaultProps = {
    size: 'large',
    view: 'list',
    theme: 'black',
}


export default SpotifyPlayer
