import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Copy from '../Copy';
import { FooterWrapper, IconRow, IconLink } from './styles';

interface FooterProps {
	socialLinks: string[];
}

const Footer = ({ socialLinks }: FooterProps) => {
	const [gitHubLink, twitterLink] = socialLinks;

	return (
		<FooterWrapper>
			<Copy>
				© {new Date().getFullYear()} all rights reserved. designed and built and andrew shearer
			</Copy>
			<IconRow>
				<IconLink href={gitHubLink} target='_blank' rel='noopener noreferrer'>
					<FontAwesomeIcon icon={faGithub} size='lg' />
				</IconLink>
				<IconLink href={twitterLink} target='_blank' rel='noopener noreferrer'>
					<FontAwesomeIcon icon={faTwitter} size='lg' />
				</IconLink>
			</IconRow>
		</FooterWrapper>
	);
};

export default Footer;
