export const styles = {
    fieldContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        paddingTop: '10px'
    },
    selectContainer: {
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        fontWeight: '400',
        fontSize: '1rem',
        lineHeight: '1.4375em',
        letterSpacing: '0.00938em',
        color: 'rgba(0, 0, 0, 0.87)',
        boxSizing: 'border-box',
        cursor: 'text',
        display: 'inline-flex',
        alignItems: 'center',
        position: 'relative',
        borderRadius: '4px',
        border: 'none',
        width: '100%'
    },
    downSortArrow: {
        right: `calc(2.5% + 24px)`,
        top: '36px',
        width: '0',
        position: 'absolute',
        height: '0',
        borderLeft: '13px solid #09080800',
        borderRight: '13px solid transparent',
        borderTop: '20px solid #101011'
    },
    upSortArrow: {
        right: '2.5%',
        top: '36px',
        width: '0',
        position: 'absolute',
        height: '0',
        borderLeft: '13px solid #09080800',
        borderRight: '13px solid transparent',
        borderBottom: '20px solid #101011'
    },
    sort: {
        position: 'absolute',
        right: `calc(2.5% + 12px)`
    },
    dummy: {
        visibility: 'hidden',
        width: '40px'
    }
}