const React = require('react');
const PageWrapper = require('./src/global/PageWrapper').default;
const Bugsnag = require('@bugsnag/js');
const BugsnagPluginReact = require('@bugsnag/plugin-react').default;

exports.wrapPageElement = ({
    element,
    props
}) => {
    if (process.env.NODE_ENV === 'development') {
        return <PageWrapper { ...props
        } > {
            element
        } < /PageWrapper>;
    }

    Bugsnag.start({
        apiKey: process.env.GATSBY_BUGSNAG_API_KEY,
        plugins: [new BugsnagPluginReact()],
        enabledReleaseStages: ['production', 'staging', 'preview'],
        releaseStage: process.env.GATSBY_VERCEL_GIT_COMMIT_REF === 'staging' ?
            'staging' :
            process.env.GATSBY_VERCEL_ENV,
        appVersion: process.env.GATSBY_VERCEL_GIT_COMMIT_SHA || 'local',
    });

    const ErrorBoundary = Bugsnag.getPlugin('react').createErrorBoundary(React);

    return ( <
        ErrorBoundary >
        <
        PageWrapper { ...props
        } > {
            element
        } < /PageWrapper> <
        /ErrorBoundary>
    );
};

/**
 * Extracted from the source code of the previous GTM plugin.
 * https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-plugin-google-tagmanager/src/gatsby-browser.js
 *
 */
exports.onRouteUpdate = () => {
    setTimeout(() => {
        if (
            typeof window !== 'undefined' &&
            window.dataLayer &&
            typeof window.dataLayer.push === 'function'
        )
            window.dataLayer.push({
                event: 'ih-website-route-change'
            });
    }, 50);
};